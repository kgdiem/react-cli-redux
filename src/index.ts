import { Files, Parser, Transformer } from './lib'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const [component, pathName, pathParts] = Parser.getPathParts(args.shift())

        const componentClass = Transformer.createFunctionalComponent(component)

        const path = Files.getPath(pathParts, component, 'js')

        await Files.writeFile(path, componentClass)
        
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)
