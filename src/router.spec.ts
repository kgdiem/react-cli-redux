import Router from './router'

describe('Router', () => {
    it('returns unsupported command for unsupported command', async () => {
        const res = await Router(['node', 'args', 'test'], ' ')

        expect(res).toBe('Unsupported command')
    })
})