import './type-pokemon.js'

class cardPokemon extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.type2 = 'https://www.ufrgs.br/nieped/wp-content/uploads/2018/08/imagem-branca-grande.png'
        this.type2name = ''
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
            <img class="poke-photo" src="${this.foto}" alt=""/>
            <div class="container-infos">
                <h2 class="poke-nome">${this.nome}</h2>
                <div class="poke-tipos">
                    <type-pokemon foto="${this.type}" nome="${this.typename}"></type-pokemon>
                </div>
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
            .tipo{
                height: 28px;
                width: 28px;
                padding: 5px;
                border-radius: 50%;
            }
            .grass{
                background: #5fbd58;
                box-shadow: 0 0 20px #5fbd58;
              }
        `

        return style
    }
}

customElements.define('card-pokemon', cardPokemon)