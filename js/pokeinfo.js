'use strict'

import { getPokemon } from "./consumo.js";
import './elementos/type-pokemon.js'

const data = await getPokemon(localStorage.getItem('pokemon'))

const createAbilities = (data) => {
    
    const abilities = document.createElement('li')

    abilities.textContent = data.ability.name
    abilities.classList.add('habilidade-one')

    return abilities
}

const createType = (data) => {

    const type = document.createElement('type-pokemon')

    type.nome = data.type.name
    type.foto = `../imgs/${data.type.name}.png`

    return type
}

const loadInfo = async () => {

    const containerInfo = document.getElementById('container-status')
    const titulo = document.getElementById('titulo')

    titulo.textContent = data.name
    
    const id = document.createElement('li')
    id.textContent = `ID #${data.id}`

    const weight = document.createElement('li')
    weight.textContent = `Weight ${data.weight}`

    const habilities = document.createElement('li')
    const habilidadesContainer = document.createElement('li')
    const habilidades = data.abilities.map(createAbilities)
    habilidadesContainer.replaceChildren(...habilidades)
    const habilidadesTitulo = document.createElement('span')
    habilidadesTitulo.textContent = 'Habilidades'
    habilities.appendChild(habilidadesTitulo)
    habilities.appendChild(habilidadesContainer)
    habilities.classList.add('container-habilidade')
    habilidadesContainer.classList.add('habilidades')

    habilidades.forEach(element => {
        element.classList.add(data.types[0].type.name)
    });

    const height = document.createElement('li')
    height.textContent = `Height ${data.height}`

    const tipos = document.createElement('li')
    const types = data.types.map(createType)
    const tiposContainer = document.createElement('li') 
    const tiposTitulo = document.createElement('span')
    tiposTitulo.textContent = 'Types'
    tiposContainer.replaceChildren(...types)
    tipos.appendChild(tiposTitulo)
    tipos.appendChild(tiposContainer)


    containerInfo.appendChild(id)
    containerInfo.appendChild(weight)
    containerInfo.appendChild(habilities)
    containerInfo.appendChild(height)
    containerInfo.appendChild(tipos)
}

const loadImg = async () => {

    const imgPoke = document.getElementById('imgpoke')

    imgPoke.src = data.sprites.other.dream_world.front_default
}

const createStatus = async (dado) => {

    const div = document.createElement('div')
    const bar = document.createElement('div')
    const desempenhoBar = document.createElement('div')
    const porcentagem = document.createElement('span')
    const nome = document.createElement('span')

    div.classList.add('container-div')
    bar.classList.add('desempenho')
    desempenhoBar.classList.add('desempenho-bar')
    porcentagem.classList.add('porcentagem')
    desempenhoBar.classList.add(data.types[0].type.name)
    nome.classList.add('nome-habilidade')

    porcentagem.textContent = dado.base_stat
    desempenhoBar.style.width = dado.base_stat + '%'
    desempenhoBar.style.setProperty('--width', dado.base_stat + '%')
    nome.textContent = dado.stat.name


    bar.appendChild(desempenhoBar)
    
    div.appendChild(nome)
    div.appendChild(bar)
    div.appendChild(porcentagem)


    return div
}

const loadStatus = async () => {

    const container = document.getElementById('container-bar')

    const bars = data.stats.map(createStatus)
    const espera = await Promise.all(bars)

    container.replaceChildren(...espera)
}

console.log(data.stats[0].stat.name)
loadInfo()
loadImg()
loadStatus()


  