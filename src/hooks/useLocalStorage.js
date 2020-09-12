import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
    /// get initial state
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        } catch (e) {
            value = defaultValue
        }

        return value
    })

    // useEffect to update when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}

export default useLocalStorage