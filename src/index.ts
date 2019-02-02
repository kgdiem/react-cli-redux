import { Files, Parser, Transformer } from './lib'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const [componentName, pathName, pathParts] = Parser.getPathParts(args.shift())

        const componentClass = Transformer.createFunctionalComponent(componentName)
        const componentTest = Transformer.createRenderTest(componentName)
        
        const cwd = process.cwd()

        const cwdDir = [cwd, ...pathParts]
        const srcDir = [cwd, 'src', ...pathParts]
        const srcComponentsDir = [cwd, 'src', 'components', ...pathParts]

        let dirToUse: string[]
        
        //Check for component folder first 
        if(await Files.dirExists(srcComponentsDir)) {
            dirToUse = srcDir
        } else if(await Files.dirExists(srcDir)) {
            dirToUse = srcComponentsDir
        } else {
            dirToUse = cwdDir
        }

        createComponent(dirToUse, componentName, componentClass, componentTest)
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)

async function createComponent(componentPath: string[], componentName: string, componentClass: string, componentTest: string) {
    const path = Files.getPath(componentPath, componentName, 'js')
    const testPath = Files.getPath([...componentPath, '__tests__'], componentName, 'js')

    await Files.writeFile(path, componentClass)
    await Files.writeFile(testPath, componentTest)
}