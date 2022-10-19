class cardPokemon extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        return ['nome', 'foto']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        
        card.innerHTML = `
            <img class="poke-photo" src="${this.foto}" alt=""/>
            <div class="container-infos">
                <h2 class="poke-nome">${this.nome}</h2>
                <div class="poke-tipos"></div>
            </div>
        `

        return card
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .card{
                width: 300px;
                height: 230px;
                background-color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
            }
            .poke-photo{
                width: 100px;
                height: 107px;
            }
        `

        return style
    }
}

customElements.define('card-pokemon', cardPokemon)