import { Files, Parser, Transformer } from './lib'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const [componentName, pathName, pathParts] = Parser.getPathParts(args.shift())

        const componentClass = Transformer.createFunctionalComponent(componentName)
        const componentTest = Transformer.createRenderTest(componentName)
        
        const cwd = process.cwd()

        const cwdDir = [cwd]
        const srcDir = [cwd, 'src']
        const srcComponentsDir = [cwd, 'src', 'components']

        let dirToUse: string[]
        
        //Check for component folder first 
        if(await Files.dirExists(srcComponentsDir)) {
            dirToUse = srcComponentsDir
        } else if(await Files.dirExists(srcDir)) {
            dirToUse = srcDir
        } else {
            dirToUse = cwdDir
        }

        createComponent([...dirToUse, ...pathParts], componentName, componentClass, componentTest)
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)

async function createComponent(componentPath: string[], componentName: string, componentClass: string, componentTest: string) {
    const testPathParts = [...componentPath, '__tests__']

    const path = Files.getPath(componentPath, componentName, 'js')
    const testPath = Files.getPath(testPathParts, componentName, 'js')

    await Files.writeFile(path, componentPath, componentClass)
    await Files.writeFile(testPath, testPathParts, componentTest)
}