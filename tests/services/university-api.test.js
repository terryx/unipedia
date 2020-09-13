import UniversityAPI from '../../src/services/university-api'

describe('UniversityAPI', () => {
    test('should able to search universities', async () => {
        const api = new UniversityAPI()
        const result = await api.search('middle')
        expect(result).toBeDefined()
    })
})