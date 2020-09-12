import searchResources from './resources/search.json'

const axios = {
    create: jest.fn(() => {
        return {
            get: url => {
                return Promise.resolve({ data: searchResources })
            }
        }
    })
}

export default axios