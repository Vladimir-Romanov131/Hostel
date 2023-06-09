const { app, BrowserWindow, ipcMain, contextBridge } = require("electron");
const path = require("path");
ipcMain.handle("get-app-path", (event) => {
  return app.getPath("userData");
});
// ...........................................................................................

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false, // запретить изменение размера окна
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // hhj

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  contextBridge.exposeInMainWorld("electron", {
    readFileSync: fs.readFileSync,
  });
  // mainWindow.setMenuBarVisibility(false); // убираем меню
  // Open the DevTools.
  // mainWindow.webContents.openDevTools(); // убираем окно разработчика при запуске программы
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.commandLine.appendSwitch("ignore-certificate-errors", "true");
// ...................................................................................................
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
