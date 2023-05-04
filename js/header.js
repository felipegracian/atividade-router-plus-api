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

        const imagem = document.createElement('img')
        imagem.src = "../searchicon.png"

        container.append(bar, imagem)


        return container
    }
}

class dropDownMyApplication extends HTMLElement{
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
    
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
        .dropdown {
            float: left;
            overflow: hidden;
        }
        
        .dropdown .dropbtn {
            border: none;
            outline: none;
            background-color: #D9D9D9;
            color: black;
            font-size: 1.25rem;
            font-family: inherit;
            margin: 0;
            cursor: pointer;
            font-weight: 500;
            width: 100px;
            height: 50px;
            border: solid 1px black;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #D9D9D9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            font-size: 1rem;
        }
        
        .linha {
            position: absolute;
            width: 100%;
            top: 0;
            border: 1px solid var(--cor-marrom);
        }
        
        .dropdown-content text {
            float: none;
            color: black;
            text-decoration: none;
            display: block;
            text-align: left;
          padding: 18px 50px 18px 16px;
        }  
        .dropdown-content-years text {
            float: none;
            color: white;
            text-decoration: none;
            display: block;
            text-align: left;
          padding: 18px 50px 18px 16px;
        }  
        
        .dropdown-content text:hover {
            background-color: lightgray;
            transition: 0.4s;
            cursor: pointer;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        `
        return css
    }

    component() {
        const container = document.createElement('div')
        container.classList.add('dropdown')

        const button = document.createElement('button')
        button.classList.add('dropbtn')
        button.innerHTML = "Fotos"

        const dropdownContent = document.createElement('div')
        dropdownContent.classList.add('dropdown-content')

        const linha = document.createElement('div')
        linha.classList.add('linha')

        const a = document.createElement('text')
        a.textContent = "Fotos"

        const a2 = document.createElement('text')
        a.textContent = "Vídeos"

        const a3 = document.createElement('text')
        a.textContent = "Todos"

        dropdownContent.append(linha, a, a2, a3)
        button.append(dropdownContent)
        container.append(button)

        return container
    }
}


customElements.define('logo-company', logoHeaderMyApllication);
customElements.define('search-bar', searchBarMyApplication);
//customElements.define('dropdown-my-application', dropDownMyApplication);