"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var commands_1 = require("./commands");
exports.default = (function (argv, cwd) {
    var args = lib_1.Parser.getArgs(argv);
    var command = args.shift();
    var commandRunner = function () { return Promise.resolve('Unsupported command'); };
    if (command === 'create:component') {
        commandRunner = commands_1.createComponent;
    }
    return commandRunner(args.slice(), cwd);
});
