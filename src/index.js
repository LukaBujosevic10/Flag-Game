import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
let xml = new XMLHttpRequest();
xml.open("get","https://disease.sh/v3/covid-19/countries");
xml.onreadystatechange = function() {
  if(xml.readyState ===4 && xml.status===200){
    let d = JSON.parse(xml.responseText).map(drzava => [drzava.country,drzava.countryInfo.flag]);

    ReactDOM.render(
      <App d={d}/>,
    document.getElementById('root')
  )
  console.log("Hello");
  }
}
xml.send();