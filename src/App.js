import React,{useState,useEffect} from 'react';
import MainDisplay from './MainDisplay'
function App({d}) {
  const [drzave,promeniDrzave] = useState(); 
  const [tacna,setTacna] = useState();
  const [rezultat, proemeniRezultat] = useState({tacno:0,ukupno:0});
  const provera = (val,e)=>{
    let ev = e.target;
    let rezultatCopy = {...rezultat};
    rezultatCopy.ukupno++;
        if(val=== drzave[tacna][0]){
          rezultatCopy.tacno++;
          ev.setAttribute('id','tacna');
        }else{
          ev.setAttribute('id','netacna');
        }
      const promeni_drzavu = ()=>{
        let drz;
      const proba = async()=>{
        drz = [];
      for (let i = 0; i < 3; i++) {
        let jednadrz = d[Math.floor(Math.random() * d.length)];
        drz.push(jednadrz);
      }
      }
      proba();
      setTacna(Math.floor(Math.random() * 3));
      promeniDrzave(drz)
      proemeniRezultat(rezultatCopy);
      ev.removeAttribute("id")
    }
      setTimeout(promeni_drzavu ,1500);
  }
    useEffect(function(){
      let drz;
      const proba = async()=>{
        drz = [];
      for (let i = 0; i < 3; i++) {
        let jednadrz = d[Math.floor(Math.random() * d.length)];
        drz.push(jednadrz);
      }
      }
      proba();
      setTacna(Math.floor(Math.random() * 3));
      promeniDrzave(drz)
  },[d])
return(<MainDisplay rezultat={rezultat} tacna={tacna} drzave={drzave} provera={provera}/>)

}
export default App
