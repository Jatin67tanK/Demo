burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');
burger.addEventListener('click',()=>{
        rightnav.classList.toggle('v-class-res');
        navList.classList.toggle('v-class-res');
        navbar.classList.toggle('h-nav-res');
})


let sec = document.getElementsByClassName("section");
let i;

for (i = 0; i < sec.length; i++) {
  sec[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight*3 + "px";
    }
  });
}
i=0;

let Game = document.getElementsByClassName("quiz-heading");


for (i = 0; i < Game.length; i++) {
  Game[i].addEventListener("click", function() {
    this.classList.toggle("activeQ");
    let quiz_box = this.nextElementSibling;
    if (quiz_box.style.maxHeight) {
      quiz_box.style.maxHeight = null;
    } else {
      quiz_box.style.maxHeight = quiz_box.scrollHeight*9 + "px";
    }
  });
}
i=0

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("order");//order

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// =====================================================================
// let myNodeList = document.getElementsByTagName("li");

// for(i=0;i<myNodeList.length;i++){
//   var span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00d7");
//   span.className="close";
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);

// }
// let close = document.getElementsByClassName("close");
// for(i=0;i<close.length;i++){
//   close[i].onclick = function(){
//     let div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// let list = document.getElementsByClassName("ul");
// list.addEventListener('click', function(ev){
//   if(ev.target.tagName === 'LI'){
//     ev.target.classList.toggle("checked");
//   }
// }.false);







// =====================================================================

let passwordLength =8;
let isuppreCase = false;
let isNumber = false;
let isSpacials = false;
let inde=1;
const passwordRangeInputEl = document.getElementById("pass-range-inout");
const passwordRangeValueEl= document.getElementById("pass-range-val");
const passwordEl= document.getElementById("password");
const  genbtn = document.getElementById("Gen-Btn");
const  clearPass = document.getElementById("clearSaved");

const genratePassword = (passwordLength) =>{
  const lowerCaseletters = isNumber?"abcdefghijklmnopqrstuvwxyz":" ";
  const upperCaselatters = isuppreCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ":" ";
  const numbers =isNumber?"0123456789":" ";
  const spacials = isSpacials? "!@#$%^&*()_+":" ";
  const passwordChar = lowerCaseletters + upperCaselatters + numbers + spacials;
  let password ="";
  for(let i=0;i<passwordLength;i++){
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
}

passwordRangeInputEl.addEventListener("input", (e) =>{
  passwordLength = +e.target.value;
  passwordRangeValueEl.innerText = passwordLength;
})



let temp;
genbtn.addEventListener("click",() =>{
  const upperCaseCheckEl = document.getElementById("uppercase");
const numberCheckEL = document.getElementById("lowercase");
const spacialCheckEl = document.getElementById("spacial");

isuppreCase = upperCaseCheckEl.checked;
isNumber = numberCheckEL.checked;
isSpacials = spacialCheckEl.checked;
     const password = genratePassword(passwordLength);
   
  
    passwordEl.innerText = password;
  temp = password;
    

});
console.log(temp);

save.addEventListener("click", () =>{
  
//  function addsave(){
  let savedPassword = document.querySelector(".saved-password");
  savedPassword.insertAdjacentHTML("afterbegin",`<div class ="newBox ">${temp}</div>`)
// }
// addsave();
  });
passwordEl.addEventListener("click", (e) =>{
  if(passwordEl.innerText!==null){
    navigator.clipboard.writeText(passwordEl.innerText).then(()=>{
      alert("copied to clipboard.");
    })
    .catch((err) =>{
      alert("could not copy.")
    })
  }
 
})

clearPass.addEventListener("click", () =>{
    document.querySelector(".newBox").remove();
})
const clearAll = document.getElementById("AllclearSaved");
clearAll.addEventListener("click", () =>{
  document.querySelector(".newBox").classList.remove("newBox")
})

// ==================================

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("question-from");
const questionScoreEl = document.getElementById("score");
const quizBox = document.getElementById("qBox");
const wrongAnsEL = document.getElementsByClassName("wronfAns");

let score =0;
let storedAns;

const randomNumber = (min,max) =>{
  return Math.floor(Math.random() * (max - min + 1 )+ min);
};

console.log(randomNumber(0,50))
const genrateQuestion = ( ) =>{
  const randomNumber1 = randomNumber(1,10);
  const randomNumber2 = randomNumber(1,10);
  const question  = `Q.  ${randomNumber1} * ${randomNumber2} = ?`
  const answer = randomNumber1 * randomNumber2;
  return {answer, question};
};

const showQuestion = () =>{
  const {answer,question} = genrateQuestion();
  questionEl.innerText =question;
  storedAns = answer;
}

showQuestion();

const checkAns = (event) =>{
  event.preventDefault();
  const fromData = new FormData(questionFormEl);
  const userAnswer =+fromData.get("answer");

  if(userAnswer == storedAns){
    score+=1;
    quizBox.classList.remove('wrongAns');

    quizBox.classList.add('rightAns');
  }
  else{
    score-=1
    quizBox.classList.remove('rightAns');
    quizBox.classList.add('wrongAns');

  }
  questionScoreEl.innerText = score;
  event.target.reset();
  showQuestion();
  // console.log(userAnswer);
}


