import axios from 'axios'

class UniversityAPI {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://universities.hipolabs.com/',
            timeout: 6000,
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    search(name) {
        return this.http
            .get('search', { params: { name } })
            .then(response => response.data)
            .catch(e => {
                // We can record error somewhere
                console.log(e)
                return []
            })
    }
}

export default UniversityAPI