//! ============= DOM ===========

console.log("SELECTORS");

//****************-GETELEMENTBYID ( )**********

// console.log(document.getElementById("header"));

const h1 = document.getElementById("header")
console.log(h1);
h1.style.color ="white";
h1.style.background = "red";

//*
const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black"
button.style.color = "white"
button.style.width = "8rem"
button.style.border = "none"
button.style.borderRadius = "12px"
button.style.padding = "1rem"
button.style.fontSize = "1.2rem"
myInput.style.padding = "1rem"

//********************GETELEMENTSBYTAGNAME()************** */

const list 0 document.getElementsByTagName("li")
console.log(list); //*array döndürür
list[2].style.color = "red"
const elementFour = list.item(3)
elementFour.style.color = "blue"
elementFour.textContent = "john ınstr"

list[1].innerText = "eypes"

list[0].innerHTML = "<a href=`https://www.google.com`>google a git</a>" //*tavsiye edilen bir yöntem değil

//****************** GETELEMENTSBYCLASNAME()********** */

const myList = document.getElementsByClassName("list")
console.log(myList);
console.log(myList[0].innerText);
  

//?array.from()
const myListArry = Array.from(myList);
console.log(myListArry);
myListArry.forEach(item) => console.log(item.innerText);

console.log([...myList]); //?spred metodu
[...myList].forEach((item) => (item.style.color = "pink"))


//****************** QUERYSELECTOR() */
 //? queryselector() etiket secebilir
 const myList = document.querySelector("li")
 console.log(myList.innerText);
myList.style.color = red;
  

//?  queryselector() class secebilir
 const itemList = document.querySelector(".item-list")
itemList.style.background= "grey"
 
//? queryselector() id secebilir
const input = document.querySelector("#input")
console.log(input.value);

document.querySelector("#btn").style.cursor ="pointer"

//? queryselector() ile css deki gibi secim yapılabilir

const itemH2 = document.querySelector(".item-list h2")
itemH2.style.color = "purple"


//******************** QUERYSELECTORALL() */

const lists = document.querySelectorAll("ul li")
console.log(lists);

lists.forEach((li) => console.log(li.innerText))
console.log(document.querySelectorAll("section ul li:nth-child(3)")[0].innerText );






