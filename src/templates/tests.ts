export const DESCRIBE = (componentName: string, assertion: string): string => (
`describe('${componentName}', () => {${assertion}})`
)

export const IT = (testDescription: string, testBody: string): string => (
`
  it('${testDescription}', () => {
    ${testBody}
  })
`
)

export const SHALLOW_RENDER = (componentName: string): string => `shallow(<${componentName}/>)`

export const TEST = (componentName: string, testDescription: string, testBody: string): string => (
    DESCRIBE(componentName,
        IT(testDescription, testBody)
    )
)

export const RENDER_TEST = (componentName: string): string => (
    TEST(componentName, 'renders without crashing', SHALLOW_RENDER(componentName))
)
