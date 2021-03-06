import { Parser } from './lib'
import { createComponent } from './commands'

export default (argv: string[], cwd: string) => {
    const args = Parser.getArgs(argv)

    const command = args.shift()

    let commandRunner: (args: string[], cwd: string) => Promise<string> = () => Promise.resolve('Unsupported command')

    if(command === 'create:component') {
        commandRunner = createComponent
    }

    return commandRunner([...args], cwd)
}