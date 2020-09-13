import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = createContext()

function AuthProvider(props) {
    const [isLoggedIn, setLogin] = useLocalStorage('auth', false)
    const router = useRouter()

    const login = (username, password) => {
        setLogin(true)
        router.push('/')
    }

    const logout = () => setLogin(false)

    return (
        <AuthContext.Provider value={[isLoggedIn, login, logout]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }