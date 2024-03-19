
const myimage = (myimg) => {
    let div = document.createElement("div")
    div.className="pic"
    div.innerHTML = `
    <img src ="./pic/${myimg}"></img>`


    return div
}
export {myimage}