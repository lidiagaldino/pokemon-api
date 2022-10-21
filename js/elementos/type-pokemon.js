class typePokemon extends HTMLElement{

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
        const img = document.createElement('img')
        img.classList.add('container-type')
        img.classList.add(`${this.nome}`)

        img.src = this.foto

        return img
    }

    styles(){
        const style = document.createElement('style')
        style.innerHTML = `
            .container-type{
                height: 29px;
                padding: 5px;
                border-radius: 50%;
            }

            .normal{
                background: #a0a29f;
                box-shadow: 0 0 20px #a0a29f;
              }
            
              .fighting{
                background: #d3425f;
                box-shadow: 0 0 20px #d3425f;
              }
            
              .flying{
                background: #a1bbec;
                box-shadow: 0 0 20px #a1bbec;
              }
            
              .poison{
                background: #b763cf;
                box-shadow: 0 0 20px #b763cf;
              }
            
              .ground{
                background: #da7c4d;
                box-shadow: 0 0 20px #da7c4d;
              }
            
              .rock{
                background: #c9bb8a;
                box-shadow: 0 0 20px #c9bb8a;
              }
            
              .steel{
                background: #5695a3;
                box-shadow: 0 0 20px #5695a3;
              }
            
              .ghost{
                background: #5f6dbc;
                box-shadow: 0 0 20px #5f6dbc;
              }
            
              .bug{
                background: #92bc2c;
                box-shadow: 0 0 20px #92bc2c;
              }
            
              .water{
                background: #539ddf;
                box-shadow: 0 0 20px #539ddf;
              }
            
              .grass{
                background: #5fbd58;
                box-shadow: 0 0 20px #5fbd58;
              }
            
              .electric{
                background: #f2d94e;
                box-shadow: 0 0 20px #f2d94e;
              }
            
              .psychic{
                background: #fa8581;
                box-shadow: 0 0 20px #fa8581;
              }
              .ice{
                background: #75d0c1;
                box-shadow: 0 0 20px #75d0c1;
              }
            
              .dragon{
                background: #0c69c8;
                box-shadow: 0 0 20px #0c69c8;
              }
              .dark{
                background: #595761;
                box-shadow: 0 0 20px #595761;
              }
            
              .fairy{
                background: #ee90e6;
                box-shadow: 0 0 20px #ee90e6;
              }
            
              .fire{
                background: #fba54c;
                box-shadow: 0 0 20px #fba54c;
              }
        `

        return style
    }
}

customElements.define('type-pokemon', typePokemon)