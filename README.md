# A Coder's Message

A personal static web page ("For Cheyenne"), served by a small
zero-dependency Node HTTP server (`serve_static.js`).

## Running via electron-shell

This portable is designed to run inside
[electron-shell](https://github.com/developer-joune/electron-shell), which
spawns `serve_static.js`, assigns it a port, and opens it in its own window.

```bash
git clone https://github.com/developer-joune/electron-shell.git
cd electron-shell && npm install
cp electon_shell_meta.example.json electon_shell_meta.json
# set "portables_root" to the absolute path of the folder containing this portable
npm start
```

## Standalone (without the shell)

```bash
PORT=3000 node serve_static.js
```

Then open http://localhost:3000
