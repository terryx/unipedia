import React, { useContext } from 'react'
import Link from 'next/link'
import { Subject } from 'rxjs';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';
import { UniversityDispatchContext } from '../../contexts/university.context';
import UniversityAPI from '../../services/university-api'

const Navbar = (props) => {
    const dispatch = useContext(UniversityDispatchContext)
    const api = new UniversityAPI()
    const input = new Subject()
    input
        .pipe(debounceTime(250))
        .pipe(filter(text => text.length > 2))
        .pipe(mergeMap(value => api.search(value)))
        .subscribe((value) => {
            dispatch({ type: 'SEARCH', payload: value })
        })

    const onChange = event => input.next(event.target.value);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/"><a className="navbar-brand">Unipedia</a></Link>
                <input
                    className="form-control mr-sm-3"
                    type="search"
                    placeholder="Enter your university name here"
                    aria-label="Search"
                    onChange={onChange}
                />
            </nav>
        </header>
    )
}

export default Navbar