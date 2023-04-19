const { contextBridge, ipcRenderer } = require("electron");

// Expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, callback),
  once: (channel, callback) => ipcRenderer.once(channel, callback),
});
