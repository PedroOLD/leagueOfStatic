import React from 'react';
import useFetch from '../../../hooks/useFetch'; // dependency hook for fetching data on structure site


export const ChampionsContext = React.createContext()

export const StorageChampions = ({children}) => {

    const { data, request } = useFetch(); // data on fetch with list champions 
    

    React.useEffect(() => {
        async function fetchData() {
            const {response, json} = await request('http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json');
        }
        fetchData();
        
    },[])
    if (data)
        return (
            <ChampionsContext.Provider value={data} >
                {children}
            </ChampionsContext.Provider>
        )
    else 
        return null
}



