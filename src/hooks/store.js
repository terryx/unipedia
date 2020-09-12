import { useState, useEffect } from 'react'

const globalState = {}
const listeners = []
const actions = []

export const useStore = () => {
    const setState = useState(globalState)[1]

    const dispatch = action => {
        /// reducer
        const newState = actions[action](globalState)
        globalState = { ...globalState, ...newState }

        for (const listener of listeners) {
            listener(globalState)
        }
    }

    useEffect(() => {
        listeners.push(setState)

        /// clean up
        return () => { listeners.filter(li => li !== setState) }
    }, [setState])

    return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, initialState }
    }
    actions = { ...actions, ...userActions }
}
