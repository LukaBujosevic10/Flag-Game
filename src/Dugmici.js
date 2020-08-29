import React from 'react'
import Dugme from './Dugme'
function Dugmici({drzave,provera}) {
    return (
        <div id="dugmici">
            {drzave.map((drzava,index) => <Dugme key={index} ime={drzava[0]} provera={provera}/>)}
        </div>
    )
}

export default Dugmici
