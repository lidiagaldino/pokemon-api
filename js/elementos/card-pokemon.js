import './type-pokemon.js'

class cardPokemon extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.type2 = 'https://www.ufrgs.br/nieped/wp-content/uploads/2018/08/imagem-branca-grande.png'
        this.type2name = 'none'
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'type', 'type2', 'typename', 'type2name']
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
            <div class="poke-tipos">
                <type-pokemon foto="${this.type}" nome="${this.typename}"></type-pokemon>
                <type-pokemon foto="${this.type2}" nome="${this.type2name}"></type-pokemon>
            </div>
            <img class="poke-photo" src="${this.foto}" alt=""/>
            <div class="container-infos">
                <h2 class="poke-nome">${this.nome}</h2>
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
                padding: 10px;
            }
            .poke-photo{
                width: 100px;
                height: 107px;
            }
            .poke-tipos{
                display: flex;
                gap: 5px;
                width: 100%;
                justify-content: end;
            }
            
        `

        return style
    }
}

customElements.define('card-pokemon', cardPokemon)