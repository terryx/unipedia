import React, { useContext } from 'react'
import Link from 'next/link'
import { Subject } from 'rxjs';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';
import { UniversityDispatchContext } from '../contexts/university.context';
import UniversityAPI from '../services/university-api'

const Search = (props) => {
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
        <div className="container">
            <style jsx>{`
                .container {
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                }
            `}</style>

            <input
                className="form-control mr-sm-3"
                type="search"
                placeholder="Enter your university name here"
                aria-label="Search"
                onChange={onChange}
            />
        </div>
    )
}

export default Search