jest.mock('../../lib/Files')

import createComponent from '../createComponent'

describe('createComponent', () => {
    describe('run', () => {
        it('runs', () => {
            createComponent(['/Test/Foo/Component'], '')
        })
    })
})