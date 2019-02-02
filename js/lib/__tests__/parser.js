"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = __importStar(require("../parser"));
describe('getPathParts', function () {
    it('throws `No path provided` error when passed `undefined`', function () {
        expect(Parser.getPathParts).toThrowError(Parser.NO_PATH_PROVIDED_ERROR);
    });
    it('throws `No path provided` error when passed empty string / ""', function () {
        expect(function () { return Parser.getPathParts(''); }).toThrow(Parser.NO_PATH_PROVIDED_ERROR);
    });
    it('returns [pathName, path, [path, parts]', function () {
        var test = 'module/submodule/Component';
        var expected = ['Component', 'module/submodule/Component', ['module', 'submodule']];
        expect(Parser.getPathParts(test)).toEqual(expected);
    });
});
describe('getArgs', function () {
    it('throws if no user-provided arguments', function () {
        expect(function () { return Parser.getArgs([]); }).toThrowError(Parser.NO_PATH_PROVIDED_ERROR);
    });
    it('returns array omitting first two entries', function () {
        var args = new Array(5).fill('');
        var expected = new Array(3).fill('');
        expect(Parser.getArgs(args)).toEqual(expected);
    });
    it('keeps original array intact', function () {
        var args = new Array(5).fill('');
        Parser.getArgs(args);
        expect(args.length).toBe(5);
        expect(args).toBe(args);
    });
});
