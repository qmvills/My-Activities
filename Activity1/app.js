import { myimage } from "./img.js"
import { myFunction } from "./info.js"

let myObject = {
    title1 : "Why I Love Dogs",
    paragraph1 : "I adore dogs because they're so cute and playful. They make me happy and bring so much joy into my life. When I see their wagging tails and happy faces, it makes my heart melt. Taking care of them teaches me how to be responsible and caring. Puppies are like furry little friends who are always there to cheer me up and keep me company. They make every day more fun and exciting.",
    myimg: "3pups.jpg",
    button1: "Contact Us",
    button2: "About Us",
    title: "Title 2",
    paragraph: "Dogs are just so cute and happy! Their wagging tails and playful ways always make me smile. Taking care of them teaches me to be kind and patient. When I'm feeling down, a puppy's cuddles and kisses lift my spirits right up. They remind me to enjoy the little things in life, like running around in the yard or snuggling on the couch.",
    button3: "News",
    button4: "More"
} 

const {title1, paragraph1, myimg, button1, button2, title, paragraph, button3, button4} = myObject
let content = document.getElementById("content")
content.append(myFunction(title1,title, paragraph1,paragraph, button1,button2, button3, button4))
content.append(myimage(myimg))


