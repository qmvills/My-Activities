import { myimage } from "./img.js"
import { myFunction } from "./info.js"
import { myFunction2 } from "./card.js"

let myObject = {
    title: "Villareal, Queen Mary",
    paragraph : "I thrive on turning ideas into visually appealing designs. My goal is to become a skilled web designer and eventually start my own business in the IT industry, offering innovative designs to clients.",
    myimg: "me1.png",
    button1: "Contact me"
}

let myObject2 = {
    p1:"project1.jpg",
    p2:"ga.jpg",
    p3:"project3.jpg",
    p4:"def.jpg",
    paragraph1: "<b>The First Step (2018) </b> </br>My very first client as a freelance designer and event planner. It kickstarted my journey and fueled my passion for design, organization, and managing projects.",
    paragraph2: "<b>One of My Biggest Achievements (2021)</b></br> I played a major role in organizing one of our largest events. While it was a team effort, I contributed important plans that helped make it a success.",
    paragraph3: "<b>Always Learning (2023)</b> </br>I also excel in multimedia arts. Our film poster received the highest score. And even though studies keep me busy, I see this as a start to get even better at multimedia arts.",
    paragraph4: "<b>Entrepreneurial Spirit (2023)</b> </br> This project unlocked my potential in the business world. It was a success and even boosted my small business. I see it as one of my best-managed projects",
    button3: "Learn More",
    button4: "Learn More",
    button5: "Learn More",
    button6: "Learn More"
}

const {title, paragraph, myimg, button1} = myObject
let sectionOne = document.getElementById("sectionOne")
const  {title2, p1, p2, p3, p4, paragraph1,paragraph2,paragraph3, paragraph4, button3, button4, button5, button6} = myObject2
let sectionTwo = document.getElementById("sectionTwo")
sectionOne.append(myFunction(title, paragraph, button1))
sectionOne.append(myimage(myimg))
sectionTwo.append(myFunction2(title2, p1, p2, p3, p4, paragraph1,paragraph2,paragraph3, paragraph4, button3, button4, button5, button6))

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


