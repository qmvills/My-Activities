
const myFunction = (title1,title,paragraph, paragraph1, button1,button2,button3,button4)=> {
    let div = document.createElement("div")

    div.innerHTML = `<div class = "style">
                    <h1>${title1}</h1>
                    <h1>${title}</h1></br>
                    <p>${paragraph1}</p>
                    <p>${paragraph}</p></br>
                    <button>${button1}</button>
                    <button>${button2}</button>
                    <button>${button3}</button>
                    <button>${button4}</button>
                    </div>`
    return div
}

export {myFunction}