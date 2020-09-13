import React, { useState } from 'react'
import useInputState from '../hooks/useInputState'
import axios from 'axios'

function NewsLetter() {
    const [value, setEmail] = useInputState('')
    const [newsletter, setNewsletter] = useState('Join our newsletter!')

    const validateEmail = (value) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
            return true
        }

        return false
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()
        if (!validateEmail(value)) {
            return
        }

        // Save data into users.json
        // THIS IS FOR DEMO PURPOSE! NEVER use a GET method to send sensitive data
        await axios.get('/newsletter', { params: { email: value } })
        setEmail('')
        setNewsletter('Thanks for joining us!')
    }

    return (
        <div className="container-sm mt-5">
            <h3>{newsletter}</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={setEmail} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewsLetter