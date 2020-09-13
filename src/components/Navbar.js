import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '../contexts/auth.context'

const Navbar = (props) => {
    const initialLoginMessage = 'Sign In'
    const [isLoggedIn] = useContext(AuthContext)
    const [loginText, setLoginText] = useState(initialLoginMessage)
    const [loginStatus, setLoginStatus] = useState(false)

    useEffect(() => {
        setLoginText(isLoggedIn ? 'Hello' : initialLoginMessage)
        setLoginStatus(isLoggedIn)
    }, [isLoggedIn])

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/"><a className="navbar-brand">Unipedia</a></Link>
                {loginStatus ? <Link href="/favorite"><a className="navbar">Favorite List</a></Link> : null}
                <Link href="/newsletter"><a className="navbar">Newsletter</a></Link>
                <Link href="/login"><a className="navbar-nav ml-auto">{loginText}</a></Link>
            </nav>
        </header>
    )
}

export default Navbar