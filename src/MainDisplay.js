import React from 'react'
import Slika from './Slika'
import Dugmici from './Dugmici'
function MainDisplay({tacna,drzave,provera}) {
    return(
        <div id="game">
            {drzave!==undefined?<Slika url={drzave[tacna][1]}/>:null}
            {drzave!==undefined?<Dugmici drzave={drzave} provera={provera}/>:null}
        </div>
    )
}

export default MainDisplay
