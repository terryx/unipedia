import React, { useContext } from 'react'
import { UniversityStateContext } from "../contexts/university.context"

function UniversityList() {
    const universities = useContext(UniversityStateContext)
    console.log(universities)
    if (!universities.length) {
        return null
    }

    return (
        <div className="container">
            <style jsx>{`
                .card {
                    margin-bottom: 0.5em;
                }
            `}</style>

            {universities.map(uni => {
                return (
                    <div className="card" key={uni.name} >
                        <div className="card-body">
                            <h5 className="card-title">{uni.name}</h5>
                            <p className="card-text">Country: {uni.country}</p>
                            <a href={`//${uni.domains[0]}`} target="_blank" className="btn btn-primary">{uni.domains[0]}</a>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default UniversityList