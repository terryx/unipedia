import React, { useContext, useState, useEffect } from 'react'
import { UniversityDispatchContext } from '../contexts/university.context';
import useLocalStorage from '../hooks/useLocalStorage'

function FavoriteList() {
    const initialList = []
    const [items, setItem] = useLocalStorage('favorites', initialList)
    const [universities, setUniversities] = useState(initialList)
    const dispatch = useContext(UniversityDispatchContext)

    /// create a local copy because localStorage is not available before ComponentDidMount
    useEffect(() => {
        setUniversities(items)
    }, [items])

    const removeFavorite = (uni) => {
        const data = universities.filter(u => u.name != uni.name)
        setItem(data)
        dispatch({ type: 'REMOVE_FAVORITE', payload: uni })
    }

    if (!universities) {
        return null
    }

    return (
        <>
            <div className="container">
                <style jsx>{`
                .card {
                    margin-bottom: 0.5em;
                }
            `}</style>
                {universities.map(uni => {
                    return (
                        <div className="card" key={uni.name}>
                            <div className="card-body">
                                <h5 className="card-title">{uni.name}</h5>
                                <p className="card-text">Country: {uni.country}</p>
                                <a href={`//${uni.domains[0]}`} target="_blank" className="btn btn-primary">{uni.domains[0]}</a>

                                <div className="float-right">
                                    <button onClick={() => removeFavorite(uni)} className="btn btn-danger rounded btn-sm">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FavoriteList