import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { StorageChampions } from '../components/ChampionSelection/context/ChampionContext'
import Champions from '../components/ChampionSelection/Champions'

import '../style/css/pages/home.css'
import '../style/css/components/navbar.css'




function Homes() {
  return (
    <div className="main-container">
        <Navbar />
        <StorageChampions> 
          <Champions />
        </StorageChampions>
        
    </div>
  )
}

export default Homes