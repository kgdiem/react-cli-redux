"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("./router"));
try {
    router_1.default(process.argv, process.cwd())
        .then(function (message) {
        console.info(message);
        process.exit(0);
    });
}
catch (e) {
    console.warn(e);
    process.exit(1);
}
