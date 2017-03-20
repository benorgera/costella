const {electron, app, BrowserWindow} = require('electron'),
	path = require('path'),
	url = require('url');

let win; //store the window object

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
	app.quit(); //you could stay open on mac, but who cares
});

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600});

	win.webContents.openDevTools();

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));


	win.on('closed', () => {
		win = null; //garbage collect the window
	});
}