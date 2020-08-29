import React from 'react'

function Dugme({ime,provera}) {
    return (
            <button onClick={function(e){
                provera(ime,e);
            }} className="btn btn-primary opcija">{ime}</button>
    )
}

export default Dugme
