const getAllPokemons = async () => {
    let arrayPokemon = []

    const containerPokemon = document.getElementById('container-pokemon')

    containerPokemon.innerHTML = 'LOADING..'
    
    for (let id = 1; id < 650; id++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        
        const response = await fetch(url)
        const pokemon = await response.json()

        arrayPokemon.push(pokemon)
    }


    return arrayPokemon
}

const getTipos = async () => {

    const url = 'https://pokeapi.co/api/v2/type'

    const respose = await fetch(url)
    const tipos = await respose.json()

    return tipos.results
}

const getPokemonByType = async (type) => {

    if (type == 'none') {
        return pokemons
    } else{
        const url = `https://pokeapi.co/api/v2/type/${type}`
        const response = await fetch(url)
        const result = await response.json()

        return result.pokemon
    }
}

const getInfo = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.pokemon.name}`

    const reponse = await fetch (url)
    const result = await reponse.json()

    return result
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)
    const result = await response.json()

    return result
}

export {
    getAllPokemons,
    getTipos,
    getPokemonByType,
    getInfo,
    getPokemon
}