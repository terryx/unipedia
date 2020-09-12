import UniversityAPI from '../../services/university-api'

describe('UniversityAPI', () => {
    test('should able to search universities', async () => {
        const api = new UniversityAPI()
        const result = await api.search({ name: 'middle'})
        expect(result.data).toBeDefined()
    })
})