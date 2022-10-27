'use strict'

import { getPokemon } from "./consumo.js";

const creteTitle = (title) => {
    
}

const loadPokemon = async (pokemon) => {

    const containerInfo = document.getElementById('container-info')
    
    const data = getPokemon(pokemon)

    const title = creteTitle(data.name)
}

loadPokemon(localStorage.getItem('pokemon'))