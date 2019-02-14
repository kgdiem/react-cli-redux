"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var templates = __importStar(require("../templates"));
function createComponent(componentName) {
    return (templates.IMPORTS.REACT_WITH_COMPONENT + "\n" + templates.IMPORTS.PROP_TYPES + "\n\n" + templates.COMPONENTS.COMPONENT_CLASS(componentName));
}
exports.createComponent = createComponent;
function createFunctionalComponent(componentName) {
    return (templates.IMPORTS.REACT + "\n" + templates.IMPORTS.PROP_TYPES + "\n\n" + templates.COMPONENTS.FUNCTIONAL_COMPONENT(componentName));
}
exports.createFunctionalComponent = createFunctionalComponent;
exports.createRenderTest = function (componentName) { return (templates.IMPORTS.TESTS.SHALLOW + "\n\n" + templates.TESTS.RENDER_TEST(componentName)); };
