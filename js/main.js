'use strict'

import './elementos/card-pokemon.js'

const getPokemons = async () => {
    let arrayPokemon = []

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

    console.log(tipos.results)
    return tipos.results
}

const createPokemon = (data) => {

    const cardPokemon = document.createElement('card-pokemon')

    cardPokemon.nome = data.name.toUpperCase()
    cardPokemon.foto = data.sprites.other.dream_world.front_default

    return cardPokemon
}

const loadPokemon = async () => {

    const containerPokemon = document.getElementById('container-pokemon')

    const data = await getPokemons()

    const cards = await data.map(createPokemon)

    containerPokemon.replaceChildren(...cards)
}

loadPokemon()
getTipos()