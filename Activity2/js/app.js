import { myimage } from "./img.js"
import { myFunction } from "./info.js"
import { myFunction2 } from "./card.js"

let myObject = {
    title: "Villareal, Queen Mary",
    paragraph : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    myimg: "profilepic.jpg",
    button1: "Contact me"
}

let myObject2 = {
    title2: "Project Completed",
    p1:"p1.jpg",
    p2:"p2.jpg",
    p3:"p3.jpg",
    paragraph1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    paragraph2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    paragraph3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    button3: "Learn More",
    button4: "Learn More",
    button5: "Learn More"
}

const {title, paragraph, myimg, button1} = myObject
let sectionOne = document.getElementById("sectionOne")
const  {title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5} = myObject2
let sectionTwo = document.getElementById("sectionTwo")
sectionOne.append(myFunction(title, paragraph, button1))
sectionOne.append(myimage(myimg))
sectionTwo.append(myFunction2(title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5))