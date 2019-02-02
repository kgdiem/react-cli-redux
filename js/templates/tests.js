"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DESCRIBE = function (componentName, assertion) { return ("describe('" + componentName + "', () => {\n    " + assertion + "\n})"); };
exports.IT = function (testDescription, testBody) { return ("it(" + testDescription + ", () => {\n    " + testBody + "\n})"); };
exports.SHALLOW_RENDER = function (componentName) { return ("shallow(<" + componentName + "/>)"); };
exports.RENDER_TEST = function (componentName) { return (exports.DESCRIBE(componentName, exports.IT('renders without crashing', exports.SHALLOW_RENDER(componentName)))); };
exports.TEST = function (componentName, testDescription, testBody) { return (exports.DESCRIBE(componentName, exports.IT(testDescription, testBody))); };
