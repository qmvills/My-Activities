
const myFunction2 = (title2, p1, p2,p3, paragraph1,paragraph2,paragraph3, button3, button4, button5)=> {
    let div = document.createElement("div")

    div.innerHTML = `<div class = "style2">
    
                    <div class = "picsur">
                        <img src ="./images/${p1}"></img>
                        <p>${paragraph1}</p>
                        <button>${button3}</button>
                    </div>
                    <div class = "picsur">
                        <img src ="./images/${p2}"></img>
                        <p>${paragraph2}</p>
                        <button>${button4}</button>
                    </div>
                    <div class = "picsur">
                        <img src ="./images/${p3}"></img>
                        <p>${paragraph3}</p>
                        <button>${button5}</button>
                    </div>
                    </div>`
    return div
}

export {myFunction2}