// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const exec = require('child_process').exec;
const { ipcMain ,ipcRenderer} = require('electron')

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => { 
      callback(stdout); 
  });
};

function compile(){
  return new Promise((resolve,reject)=>{
    let p = path.join(project_path[0],"../../..");
    let command = `node filegenerator.js ${p} && webpack --config ${path.join(p,"webpack.config.js")} --env.context=${p}`;
    console.log(command);
    execute(command, (output) => {
      resolve(output);
    });
  })
}



let editor;
let project_path;
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
  editor = mainWindow;
  mainWindow.maximize();
  mainWindow.webContents.openDevTools();
  // and load the index.html of the app.
  mainWindow.loadFile('target/index.html')
  if(!project_path){
    project_path = dialog.showOpenDialogSync(mainWindow,{
      title:"Open package.json",
      filters:[
        {name:"main.ts",extensions:["ts"]}
      ]
     }
    )
    //ipcRenderer.sendSync('project_path', project_path);
  }
  ipcMain.on('path-request', (event, arg) => {
    event.returnValue = project_path;
  })
  ipcMain.on('compile-prompt', async (event, arg) => {
    console.log("compiling");
    let output = await compile();
    console.log(output);
    editor.reload();
    event.returnValue = "yep";
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
    console.log(prompt);
    event.returnValue = prompt; 
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
