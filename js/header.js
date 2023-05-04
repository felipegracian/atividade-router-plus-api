'use strict'

 
class logoHeaderMyApllication extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null

    }

    static get observedAttributes() {
        return ['foto']
    }

    attributeChangedCallback(fotoAttr, oldValue, newValue) {
        this[fotoAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .card{
            width: 150px;
            height: 150px;
            border-radius: 5%;
        
        }
        .card__image{
            height: 100%;
            width: 100$;
            
            background-image: url(${this.foto});
            background-size: cover;
        }
        `

        
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')


        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        card.append(imagem)
        return card
    }
}

class searchBarMyApplication extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.palavra = ''
    
    }


    static get observedAttributes() {
        return ['palavra']
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this[attr] = newValue
    }

    

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .divBusca{
            display: flex;
            flex-wrap: wrap;
            border:solid 1px;
            border-radius:15px;
            height: 50px;
            width:400px;
            background-color:#D9D9D9;
            align-items: center;
           padding-left: 15px;
           justify-content: space-around;
        }
        
        
        .txtBusca{
            float:left;
            background-color: transparent;
            padding-left:5px;
            font-size:18px;
            border:none;
            height:100%;
            width:80%;
          }
        
        .divBusca img{
            height: 20px;
            width: 20px;
        }
        `
        return css
    }

    component() {
        const container = document.createElement('div')
        container.classList.add('divBusca')

        const bar = document.createElement('input')
        bar.type = "text"
        bar.classList.add('txtBusca')
        bar.placeholder = "O que você procura?"
        
        const valor = bar.addEventListener('change', () => {
            const atributoSet = this.setAttribute('palavra', bar.value)
            // const atributoGet = this.getAttribute('palavra', bar.value)
        })

        const imagem = document.createElement('img')
        imagem.src = "../searchicon.png"

        container.append(bar, imagem)


        return container
    }
}




customElements.define('logo-company', logoHeaderMyApllication);
customElements.define('search-bar', searchBarMyApplication);

