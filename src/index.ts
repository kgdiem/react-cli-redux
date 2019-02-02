import { Parser } from './lib'

((argv) => {
    try {
        const args = Parser.getArgs(argv)

        const [component, pathName, pathParts] = Parser.getPathParts(args.shift())
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)
