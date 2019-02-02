export const NO_PATH_PROVIDED_ERROR = 'No path provided'

export function getPathParts(path: string|undefined): [string, string, string[]] {
    if(path === undefined)
        throw new Error(NO_PATH_PROVIDED_ERROR)

    const parts = path.split('/')

    const componentName = parts.pop()

    if(!componentName)
        throw new Error(NO_PATH_PROVIDED_ERROR)

    return [componentName, path, parts]
}

export function getArgs(args: string[]): string[] {
    const argLength = args.length

    if(argLength < 2) {
        throw new Error(NO_PATH_PROVIDED_ERROR)
    }

    return args.slice(2, argLength)
}