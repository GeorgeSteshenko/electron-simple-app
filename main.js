const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "/images/sysinfo.png"),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load index.html
  win.loadFile("index.html");

  // Open devtools
  win.webContents.openDevTools();

  win.on("closed", () => (win = null));
}

// Run create winfow fn
app.whenReady().then(createWindow);

// Quit wen all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
