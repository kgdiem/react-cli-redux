import { vol } from 'memfs'
import * as Files from '../files'
import path from 'path'

const mockFs = {
    './testdir/text.txt': '1' 
}

vol.fromJSON(mockFs, '/')

jest.mock('fs', () => vol)

describe('Files', () => {
    describe('dirExists', () => {
        it('returns true if a directory exists', async () => {
            const dirExists = await Files.dirExists(['/','testdir'])

            expect(dirExists).toBeTruthy()
        })

        it('returns false if a directory doesn\'t exist', async () => {
            const dirExists = await Files.dirExists(['/','not-here'])

            expect(dirExists).toBeFalsy()
        })
    })

    describe('getPath', () => {
        it('returns a path from parts', () => {
            spyOn(path, 'resolve').and.callFake(() => '/test/path')

            const res = Files.getPath(['test', 'path'], 'test', 'js')

            expect(res).toBe('/test/path/test.js')
        })
    })

    describe('safeWrite', () => {
        
    })
    
    describe('write', () => {

    })

    describe('mkdir', () => {

    })
})