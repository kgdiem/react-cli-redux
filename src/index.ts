import { Parser } from './lib'
import { createComponent } from './commands'

(async (argv) => {
    try {
        const args = Parser.getArgs(argv)

        const command = args.shift()

        let commandRunner: (args: string[]) => Promise<void> = () => Promise.resolve()

        if(command === 'create:component') {
            commandRunner = createComponent.run
        }

        await commandRunner([...args])
    } catch(e) {
        console.warn(e)

        process.exit(1)
    }
})(process.argv)
