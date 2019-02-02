"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_COMPONENT_BODY = '<span></span>';
exports.EXPORT_DEFAULT = function (componentName) { return "export default " + componentName; };
exports.PROP_TYPES = function (componentName) { return (componentName + ".propTypes = {\n\n}"); };
exports.COMPONENT_CLASS = function (componentName) { return ("class " + componentName + " extends Component {\n  render() {\n    " + DEFAULT_COMPONENT_BODY + "\n  }\n}\n\n" + exports.PROP_TYPES(componentName) + "\n\n" + exports.EXPORT_DEFAULT(componentName)); };
exports.FUNCTIONAL_COMPONENT = function (componentName) { return ("const " + componentName + " = (props) => (\n  " + DEFAULT_COMPONENT_BODY + "\n)\n\n" + exports.PROP_TYPES(componentName) + "\n\n" + exports.EXPORT_DEFAULT(componentName)); };
