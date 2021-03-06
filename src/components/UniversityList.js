import React, { useContext, memo } from 'react'
import { UniversityStateContext } from "../contexts/university.context"
import { UniversityDispatchContext } from '../contexts/university.context';
import useLocalStorage from '../hooks/useLocalStorage'
import Search from './Search'

function UniversityList() {
    const { universities } = useContext(UniversityStateContext)
    const [storage, setItem] = useLocalStorage('favorites', [])
    const dispatch = useContext(UniversityDispatchContext)

    if (!universities) {
        return (
            <Search />
        )
    }

    const addToFavorite = (uni) => {
        const data = storage.filter(u => u.name != uni.name)
        const newList = [...data, uni]
        setItem(newList)
        dispatch({ type: 'SAVE_FAVORITE', payload: uni })
    }

    return (
        <>
            <Search />
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
                                    <button onClick={() => addToFavorite(uni)} className="btn btn-danger rounded btn-sm">
                                        Add to Favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default memo(UniversityList)