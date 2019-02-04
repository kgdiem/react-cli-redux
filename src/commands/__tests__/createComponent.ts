import { vol } from 'memfs'

jest.mock('fs', () => vol)

import createComponent from '../createComponent'

describe('createComponent', () => {
    describe('run', () => {
        it('runs', () => {
            createComponent(['/Test/Foo/Component'], '')
        })

        xit('prefers src/components dir', async () => {
            const mockFs = {
                'src/components/test.txt': '1' 
            }
            
            vol.fromJSON(mockFs, '/')

            await createComponent(['/Test/Foo/Component'], '')

            expect(vol.toJSON()).toHaveProperty('src/components/test/foo.js')
        })

        xit('prefers src dir if no components dir', async () => {
            const mockFs = {
                'src/test.txt': '1' 
            }
            
            vol.fromJSON(mockFs, '/')

            await createComponent(['/Test/Foo/Component'], '')

            expect(vol.toJSON()).toHaveProperty('src/test/foo.js')
        })

        xit('writes to current dir if no dir exists', async () => {
            const mockFs = {
                'tt/n.txt': '1' 
            }
            
            vol.fromJSON(mockFs, '/')

            createComponent(['/Test/Foo/Component'], '')

            expect(vol.toJSON()).toHaveProperty('/Test/Foo.js')
        })
    })
})