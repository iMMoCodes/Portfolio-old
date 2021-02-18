// PROJECTS 

// Constants
const PROJECT_ONE_TITLE = "Recipe Search";
const PROJECT_TWO_TITLE = "Shopping Site";
const PROJECT_THREE_TITLE = "Tic Tac Toe";

const PROJECT_ONE_DESC = "First one"
const PROJECT_TWO_DESC = "Second one"
const PROJECT_THREE_DESC = "Third one"

// Project Variables
const projectSection = document.querySelector(".projects-section");
const projectContainer = document.querySelector(".projects-container");
const projectTitle = document.querySelector(".projects-title");
const projectImg = document.querySelector(".project-img");
const projectStackImgs = document.querySelectorAll(".project-stack-img");
const projectName = document.querySelector(".project-name");
const projectDescription = document.querySelector(".project-description");
const projectBtns = document.querySelectorAll(".project-choice");
const projectOneBtn = document.querySelector("#projectOne");
const projectTwoBtn = document.querySelector("#projectTwo");
const projectThreeBtn = document.querySelector("#projectThree");
const viewBtn = document.querySelector("#viewBtn");
const codeBtn = document.querySelector("#codeBtn");


// Moving Animation
projectContainer.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 75;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 75;
   projectContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animate In
projectContainer.addEventListener("mouseenter", (e) => {
   projectContainer.style.transition = "none";
   //Popout
   projectTitle.style.transform ="translateZ(150px)";
   projectStackImgs.forEach(stackImg => {
   stackImg.style.transform ="translateZ(200px)";
   });
   projectDescription.style.transform ="translateZ(125px)";
   projectBtns.forEach(btn => {
   btn.style.transform ="translateZ(100px)";
   });
   viewBtn.style.transform ="translateZ(75px)";
   codeBtn.style.transform ="translateZ(75px)";
});

projectContainer.addEventListener("mouseleave", (e) => {
   projectContainer.style.transition = "all 1.0s ease";
   projectContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
   //Popback
   projectTitle.style.transform ="translateZ(0px)";
   projectStackImgs.forEach(stackImg => {
   stackImg.style.transform ="translateZ(0px) rotateZ(0deg)";
   });
   projectDescription.style.transform ="translateZ(0px)";
   projectBtns.forEach(btn => {
   btn.style.transform ="translateZ(0px)";
   });
   viewBtn.style.transform ="translateZ(0px)";
   codeBtn.style.transform ="translateZ(0px)";
});

// Switch Projects
const projectOneChange = () => {
   projectName.innerHTML = PROJECT_ONE_TITLE;
   projectDescription.innerHTML = PROJECT_ONE_DESC;
}

const projectTwoChange = () => {
   projectName.innerHTML = PROJECT_TWO_TITLE;
   projectDescription.innerHTML = PROJECT_TWO_DESC;
}

const projectThreeChange = () => {
   projectName.innerHTML = PROJECT_THREE_TITLE;
   projectDescription.innerHTML = PROJECT_THREE_DESC;
}

projectOneBtn.addEventListener("click",projectOneChange);
projectTwoBtn.addEventListener("click",projectTwoChange);
projectThreeBtn.addEventListener("click",projectThreeChange);