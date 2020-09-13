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
            return { ...state, universities: data.list }
        case 'SAVE_FAVORITE':
            const universities = state.universities.filter(uni => uni.name != action.payload.name)
            return { ...state, universities, favorites: action.payload }
        case 'REMOVE_FAVORITE':
            return state
    }
}

export default reducer