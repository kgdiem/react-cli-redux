const DEFAULT_COMPONENT_BODY = '<span></span>'

export const EXPORT_DEFAULT = (componentName: string): string => `export default ${componentName}`

export const PROP_TYPES = (componentName: string): string => (
`${componentName}.propTypes = {

}`
)

export const COMPONENT_CLASS = (componentName: string): string => (
`class ${componentName} extends Component {
  render() {
    ${DEFAULT_COMPONENT_BODY}
  }
}

${PROP_TYPES(componentName)}

${EXPORT_DEFAULT(componentName)}
`)

export const FUNCTIONAL_COMPONENT = (componentName: string): string => (
`const ${componentName} = (props) => (
  ${DEFAULT_COMPONENT_BODY}
)

${PROP_TYPES(componentName)}

${EXPORT_DEFAULT(componentName)}`
)