import React from 'react'
import { ChampionsContext } from './context/ChampionContext';

import './style/champions.css';

const Champions = () => {

    const listChampions = React.useContext(ChampionsContext); // list champion sem json object. not is array object
    

    const arrayChampions = Object.keys(listChampions).map((key) => {
        return listChampions[key];
    })

    console.log(arrayChampions)
    
    
    return (
        <div className="champions-container">
            {arrayChampions.map((champion) => (
                <ul className="champions-list">
                    <li key={champion.id} className="list-item">
                        <a href="http://" key={champion.id}><img key={champion.id} src={`http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champion.image.full}`}  alt={`image champion ${champion.name}`} /></a>
                    </li>
                </ul>
            ))}
        </div>
    )
    
}

export default Champions;