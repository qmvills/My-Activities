import { myimage } from "./img.js"
import { myFunction } from "./info.js"

let myObject = {
    title1 : "The 3 Puppies",
    paragraph1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    myimg: "3pups.jpg",
    button1: "contact us",
    button2: "about us",
    title: "Title 2",
    paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    button3: "contact us",
    button4: "about us"
} 

const {title1, paragraph1, myimg, button1, button2, title, paragraph, button3, button4} = myObject
let content = document.getElementById("content")
content.append(myFunction(title1,title, paragraph1,paragraph, button1,button2, button3, button4))
content.append(myimage(myimg))

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'black';
	} else {
		header.style.backgroundColor = 'black';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
