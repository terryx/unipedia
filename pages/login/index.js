import React from 'react'
import Link from 'next/link'

// import theme from '../../components/.module.css'

const LoginPage = props => {
    return (
        <div className="container-sm mt-5">
            <h3>Login Page</h3>
            <form className="align-items-center">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage