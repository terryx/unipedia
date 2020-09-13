import fs from 'fs'
import NewsLetter from '../../src/services/newsletter'

describe('NewsLetter', () => {
    test('should able to save email', (done) => {
        const newsletter = new NewsLetter()
        newsletter.save('?email=example%40gmail.com', 'users.test.json')

        const content = fs.readFileSync('src/resources/users.test.json', 'utf-8')
        const data = JSON.parse(content)
        expect(data.length).toBeDefined()

        /// clean up resources
        fs.unlinkSync('src/resources/users.test.json')
        done()
    })
})