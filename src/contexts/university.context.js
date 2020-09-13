import React, { createContext, useReducer, useEffect } from 'react'
import universityReducer from '../reducers/university.reducer'

const initialValues = {}
const UniversityStateContext = createContext()
const UniversityDispatchContext = createContext()

function UniversityProvider(props) {
    const [state, dispatch] = useReducer(universityReducer, initialValues)

    return (
        <UniversityStateContext.Provider value={state}>
            <UniversityDispatchContext.Provider value={dispatch}>
                {props.children}
            </UniversityDispatchContext.Provider>
        </UniversityStateContext.Provider>
    )
}

export { UniversityProvider, UniversityStateContext, UniversityDispatchContext } 