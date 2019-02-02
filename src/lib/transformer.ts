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

export function createFunctionalComponent(componentName: string): string {
    return (
`
${templates.IMPORTS.REACT}
${templates.IMPORTS.PROP_TYPES}

${templates.COMPONENTS.FUNCTIONAL_COMPONENT(componentName)}
`
    )
}

export const createRenderTest = (componentName: string) => (
`
${templates.IMPORTS.TESTS.SHALLOW}

${templates.TESTS.RENDER_TEST(componentName)}
`
)
