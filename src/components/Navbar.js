import React from 'react'
import Link from 'next/link'

const Navbar = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/"><a className="navbar-brand">Unipedia</a></Link>
                <Link href="/favorite"><a className="navbar">Favorite List</a></Link>
                <Link href="/newsletter"><a className="navbar">Newsletter</a></Link>
            </nav>
        </header>
    )
}

export default Navbar