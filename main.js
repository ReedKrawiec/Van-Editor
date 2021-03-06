// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const exec = require('child_process').exec;
const { ipcMain ,ipcRenderer} = require('electron')
const fs = require('fs-extra')

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => { 
      callback(stdout); 
  });
};

function compile(env){
  return new Promise((resolve,reject)=>{
    let p = path.join(project_path[0],"../../..");
    let command = `node filegenerator.js ${p} && webpack --define process.env.NODE_ENV='\"dev\"' --config ${path.join(p,"webpack.config.js")} --env.context=${p} --env.target=target`;
    console.log(command);
    log_outputs.push(command);
    execute(command, (output) => {
      log_outputs.push(output);
      resolve(output);
    });
  })
}


function build(env){
  return new Promise((resolve,reject)=>{
    let p = path.join(project_path[0],"../../..");
    let command = `node filegenerator.js ${p} && webpack --define process.env.NODE_ENV='\"production\"' --config ${path.join(p,"webpack.config.js")} --env.context=${p} --env.target=build`;
    console.log(command);
    
    let root = path.join(project_path[0],"..");
    let target_dir = path.join(root,"..","..","build")
    log_outputs.push(command);
    execute(command, (output) => {
      fs.copySync(path.join(root,"sprites"),path.join(target_dir,"sprites"));
      if(fs.existsSync(path.join(root,"sounds")))
        fs.copySync(path.join(root,"sounds"),path.join(target_dir,"sounds"));
      log_outputs.push(output);
      resolve(output);
    });
  })
}

function create_project(p){
  return new Promise((resolve,reject)=>{
    p = p[0];
    fs.copySync("./template",p);
    let cwd = process.cwd();
    process.chdir(p);
    execute("npm install",(output)=>{
      process.chdir(cwd);
      log_outputs.push(output);
      resolve(output);
    })
  })
  
}


let editor;
let project_path;
let log_outputs = [];
// call the function




function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // <--- flag
      nodeIntegrationInWorker: true // <---  for web workers
    }
  })
  if(editor){
    editor.close();
    ipcMain.removeAllListeners();
  };
  if(project_path){
    log_outputs.push("Loading: " + project_path)
  }
  
  editor = mainWindow;
  mainWindow.maximize();
  mainWindow.webContents.openDevTools();
  // and load the index.html of the app.
  mainWindow.loadFile('target/index.html')
  ipcMain.on('open-project',(event,arg)=>{
    project_path = dialog.showOpenDialogSync(mainWindow,{
      title:"Open package.json",
      properties:["openFile"],
      filters:[
        {name:"main.ts",extensions:["ts"]}
      ]
     });
    createWindow();
  })
  ipcMain.on('path-request', (event, arg) => {
    event.returnValue = project_path;
  })
  ipcMain.on('compile-prompt', async (event, arg) => {
    console.log("compiling");
    let output = await compile();
    console.log(output);
    editor.reload();
    event.returnValue = output;
  })
  ipcMain.on('build-prompt', async (event, arg) => {
    console.log("building");
    let output = await build();
    console.log(output);
    event.returnValue = output;
  })
  ipcMain.on('create-project-prompt', async (event, arg) => {
    console.log("creating project");
    log_outputs.push("Creating a new project. This may take a while.");
    let path = dialog.showOpenDialogSync(mainWindow,{
      title:"Select game folder",
      properties:["openDirectory"],
     });
     if(path[0]){
      let output = await create_project(path);
      event.returnValue = output;
     }
  })
  ipcMain.on('object-path-request', (event, arg) => {
    let defau = path.join(path.parse(project_path[0]).dir,arg)
    let prompt = dialog.showSaveDialogSync(mainWindow,{
      title:`Choose ${arg} name`,
      defaultPath:defau,
      filters:[
        {name:"Typescript file",extensions:["ts"]}
      ]
    });
    event.returnValue = prompt; 
  })
  ipcMain.on('logs-request', (event, arg) => {
    event.returnValue = log_outputs;
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
