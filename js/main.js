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

const createTipos = (data) => {

    if (data.name != 'unknown' && data.name != 'shadow') {
        const item = document.createElement('li')
        const tipo = document.createElement('a')
        const img = document.createElement('img')
    
        item.classList.add('menu-item')
        img.src = `../imgs/${data.name}.png`

        img.classList.add('logo-tipo')
        img.classList.add(`${data.name}`)
        
        tipo.href = '#'
        tipo.textContent = data.name
    
        item.appendChild(img)
        item.appendChild(tipo)
    
        console.log(item)
        return item
    } else{
        return ''
    }
}

const loadTipos = async () => {

    const dropdownTipos = document.getElementById('sub-menu')

    const data = await getTipos()

    const tipos = data.map(createTipos)

    dropdownTipos.replaceChildren(...tipos)
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

    const cards = data.map(createPokemon)

    containerPokemon.replaceChildren(...cards)
}

loadPokemon()
loadTipos()