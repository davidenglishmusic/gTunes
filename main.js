const {
  app,
  BrowserWindow
} = require('electron')

let win

function createWindow() {
  const screen = require('electron').screen;
  const display = screen.getPrimaryDisplay();
  const area = display.workArea;


  win = new BrowserWindow({
    width: area.width,
    height: area.height
  })

  win.loadURL('https://play.google.com/music/listen#/albums')


  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
