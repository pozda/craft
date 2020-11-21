import React, {useEffect, useState} from 'react'
import {getDayOfYear} from 'date-fns'

import NetworkService from 'network/NetworkService'
import {getDataRequest} from 'network/Requests'

import GlobalStyles from 'styles/globalStyles'

const App: React.FC<{}> = () => {
    const [pokemon, setPokemon] = useState({name: '', sprites:{front_default:''}})
    const [fetchError, setFetchError] = useState('')
        
    useEffect(() => {
        const networkService = new NetworkService()
        const fetchPokemon = (pokemon: number) => {
            const config = getDataRequest(pokemon)
            networkService.makeRequest(config)
                .then(response => {
                    setPokemon(response.data)
                })
                .catch(error => setFetchError(error))
        }
        const today = getDayOfYear(Date.now())
        fetchPokemon(today)
    }, [])

    return (
        <>
            <GlobalStyles />
            <div style={
                {
                    display:'flex', 
                    height: '100vh', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexDirection: 'column'
                }
            }>
                <img 
                // eslint-disable-next-line
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" 
                    alt="pokemon logo" width="500"
                />
    
                {
                    fetchError === '' 
                        ? (pokemon.name !== ''
                            ? <div>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                <p style={{textAlign: 'center'}}>
                                    {pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length)}
                                </p>
                            </div>
                            : <div>Loading</div>)
                        : <div>{fetchError}</div>
                }

            </div>
            
        </>
    )}

export default App