
const myimage = (myimg) => {
    let div = document.createElement("div")
    div.className="pic"
    div.innerHTML = `<div class = "pro">
    <img src ="./images/${myimg}"></img></div>`


    return div
}

export {myimage}