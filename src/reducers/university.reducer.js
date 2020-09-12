import UniversityAPI from '../services/university-api'
const api = new UniversityAPI()

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            if (!action.payload.length) {
                return action.payload
            }

            const data = action.payload.reduce((acc, cur) => {
                if (!acc.unique[cur.name]) {
                    acc.unique[cur.name] = true
                    acc.list.push(cur)
                }

                return acc
            }, { list: [], unique: {} })
            return data.list
    }
}

export default reducer