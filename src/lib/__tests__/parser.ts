import * as Parser from '../parser'

describe('Parser', () => {
    
    describe('getPathParts', () => {
        it('throws `No path provided` error when passed `undefined`', () => {
            expect(Parser.getPathParts).toThrowError(Parser.NO_PATH_PROVIDED_ERROR)
        })

        it('throws `No path provided` error when passed empty string / ""', () => {
            expect(() => Parser.getPathParts('')).toThrow(Parser.NO_PATH_PROVIDED_ERROR)
        })
        
        it('returns [pathName, path, [path, parts]', () => {
            const test = 'module/submodule/Component'

            const expected = ['Component', 'module/submodule/Component', ['module', 'submodule']]

            expect(Parser.getPathParts(test)).toEqual(expected)
        })
    })

    describe('getArgs', () => {
        it('throws if no user-provided arguments', () => {
            expect(() => Parser.getArgs([])).toThrowError(Parser.NO_COMMAND_PROVIDED_ERROR)
        })

        it('returns array omitting first two entries', () => {
            const args = new Array(5).fill('')

            const expected = new Array(3).fill('')

            expect(Parser.getArgs(args)).toEqual(expected)
        })

        it('keeps original array intact', () => {
            const args = new Array(5).fill('')

            Parser.getArgs(args)

            expect(args.length).toBe(5)
            expect(args).toBe(args)
        })
    })
})