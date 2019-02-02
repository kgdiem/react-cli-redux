"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_PATH_PROVIDED_ERROR = 'No path provided';
function getPathParts(path) {
    if (path === undefined)
        throw new Error(exports.NO_PATH_PROVIDED_ERROR);
    var parts = path.split('/');
    var componentName = parts.pop();
    if (!componentName)
        throw new Error(exports.NO_PATH_PROVIDED_ERROR);
    return [componentName, path, parts];
}
exports.getPathParts = getPathParts;
function getArgs(args) {
    var argLength = args.length;
    if (argLength < 2) {
        throw new Error(exports.NO_PATH_PROVIDED_ERROR);
    }
    return args.slice(2, argLength);
}
exports.getArgs = getArgs;
