var liveServer = require("live-server");

var params = {
    root: "", // Set root directory that's being served. Defaults to cwd.
    file: "index.html",
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};
liveServer.start(params);