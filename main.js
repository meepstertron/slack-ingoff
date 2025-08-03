console.log("Slack-Ingoff Loaded! :D")

window.addEventListener('keydown', (e) => {
  if (e.key === 'F12') {
    // Try to open dev tools if possible
    if (window.require) {
      const { remote } = window.require('electron');
      remote.getCurrentWindow().webContents.openDevTools();
    } else {
      console.log('Electron remote module not accessible');
    }
  }
});
