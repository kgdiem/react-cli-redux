import { Files, Parser, Transformer } from './lib'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const [componentName, pathName, pathParts] = Parser.getPathParts(args.shift())

        const componentClass = Transformer.createFunctionalComponent(componentName)
        const componentTest = Transformer.createRenderTest(componentName)
        
        const path = Files.getPath(pathParts, componentName, 'js')
        const testPath = Files.getPath([...pathParts, '__tests__'], componentName, 'js')

        /*
        await Files.writeFile(path, componentClass)
        await Files.writeFile(testPath, componentTest)
        */
        
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)
