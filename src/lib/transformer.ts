import * as templates from '../templates'

export function createComponent(componentName: string): string {
    return (
`
${templates.IMPORTS.REACT_WITH_COMPONENT}
${templates.IMPORTS.PROP_TYPES}

${templates.COMPONENTS.COMPONENT_CLASS(componentName)}
`
    )
}