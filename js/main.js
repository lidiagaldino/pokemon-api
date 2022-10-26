'use strict'

import './elementos/card-pokemon.js'
import './elementos/type-pokemon.js'
import { getAllPokemons, getInfo, getPokemonByType, getTipos } from './consumo.js'

let contFinal = 50

var pokemons = await getAllPokemons()

const getPokemonByName = (pokemon) =>{

    const search = []
    pokemons.forEach(item => {
        if (item.name.includes(pokemon.pokemon.name)) {
            search.push({name: item.name, sprites: {other: {dream_world: {front_default: item.sprites.other.dream_world.front_default}}}, types: item.types})
        }
    })

    return search
}

const createTipos = (data) => {

    if (data.name != 'unknown' && data.name != 'shadow') {
        const item = document.createElement('li')
        const tipoImg = document.createElement('type-pokemon')
        const tipo = document.createElement('a')
    
        item.classList.add('menu-item')
        tipoImg.foto = `./imgs/${data.name}.png`

        tipoImg.nome = data.name
        
        tipo.href = '#'
        tipo.textContent = data.name
        
        item.appendChild(tipoImg)
        item.appendChild(tipo)
    
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
    const a = document.createElement('a')
    cardPokemon.nome = data.name.toUpperCase()
    cardPokemon.foto = data.sprites.other.dream_world.front_default

    cardPokemon.type = `./imgs/${data.types[0].type.name}.png`
    cardPokemon.typename = data.types[0].type.name

    cardPokemon.classList.add(data.name)

    if (data.types.length > 1) {
        cardPokemon.type2 = `./imgs/${data.types[1].type.name }.png`
        cardPokemon.type2name = data.types[1].type.name
    }

    a.appendChild(cardPokemon)
    a.href = './pages/pokeinfo.html'
    return a
}

const loadPokemon = async () => {

    const containerPokemon = document.getElementById('container-pokemon')

    const teste = pokemons.slice(1, contFinal)

    const cards = teste.map(createPokemon)

    containerPokemon.replaceChildren(...cards)
}

loadPokemon()
loadTipos()

const input = document.getElementById('search')
const tipoContainer = document.getElementById('sub-menu')
const botao = document.getElementById('botao')

tipoContainer.addEventListener('click', async (event) => {

    const containerPokemon = document.getElementById('container-pokemon')
    botao.innerHTML = '<a class="limpar" href="#header">LIMPAR FILTRO</a>'

    const poke = await getPokemonByType(event.target.textContent)
    const completo = poke.map(getInfo)
    const resposta = await Promise.all(completo)
    const cards = resposta.map(createPokemon)

    containerPokemon.replaceChildren(...cards)
})

input.addEventListener('keydown', async () => {

    const nome = {pokemon: {name: input.value}}
    const poke = getPokemonByName(nome)
    const containerPokemon = document.getElementById('container-pokemon')
    const cards = poke.map(createPokemon)

    containerPokemon.replaceChildren(...cards)
})

botao.addEventListener('click', () => {
    contFinal += 50
    botao.innerHTML = 'VER MAIS'

    loadPokemon()
})

const main = document.querySelector('main')

main.addEventListener('click', (event) => {
    localStorage.setItem('pokemon', event.target.classList.value)
})