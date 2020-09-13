import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { AuthContext } from '../src/contexts/auth.context'
import useInputState from '../src/hooks/useInputState'

const LoginPage = props => {
    const [isLoggedIn, login, logout] = useContext(AuthContext)
    const [loginStatus, setLoginStatus] = useState(false)
    const [username, setUsername] = useInputState('')
    const [password, setPassword] = useInputState('')

    useEffect(() => {
        setLoginStatus(isLoggedIn)
    }, [isLoggedIn])

    const onLogout = () => {
        logout()
    }

    const onLogin = (ev) => {
        ev.preventDefault()
        if (username === '' || password === '') {
            return
        }

        login(username, password)
    }

    if (loginStatus) {
        return (
            <div className="container-sm mt-5">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Do you want to logout ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={onLogout} className="btn btn-primary">Yes</button>
                        <Link href="/">
                            <button type="button" className="btn btn-secondary">No</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className="container-sm mt-5">
            <h3>Login Page</h3>
            <div className="alert alert-info">This is a demo. Any username or password will work</div>
            <form className="align-items-center" onSubmit={onLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={setUsername} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={setPassword} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage