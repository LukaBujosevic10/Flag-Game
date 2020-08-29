import React from 'react'

function Score({rezultat}) {
    return (
        <div id="score">
            {rezultat.tacno}/{rezultat.ukupno}
        </div>
    )
}

export default Score