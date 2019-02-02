import { Parser } from './lib'
import { createComponent } from './commands'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const command = args.shift()

        let commandRunner: (args: string[]) => Promise<string> = () => Promise.resolve('Unsupported command')

        if(command === 'create:component') {
            commandRunner = createComponent.run
        }

        commandRunner([...args])
            .then(message => {
                console.info(message)

                process.exit(0)
            })
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)
