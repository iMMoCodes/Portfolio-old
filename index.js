// PROJECT VARIABLES
const projectSection = document.querySelector(".projects-section");
const projectContainer = document.querySelector(".projects-container");
const projectTitle = document.querySelector(".projects-title");
const projectImg = document.querySelector(".project-img");
const projectStackImg = document.querySelectorAll(".project-stack-img");
const projectName = document.querySelector(".project-name");
const projectDescription = document.querySelector(".project-description");
const projectBtn = document.querySelector(".project-choice");
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
   projectStackImg.forEach(stackImg => {
   stackImg.style.transform ="translateZ(200px)";
   });
   projectDescription.style.transform ="translateZ(125px)";
   projectBtn.style.transform ="translateZ(100px)";
   viewBtn.style.transform ="translateZ(75px)";
   codeBtn.style.transform ="translateZ(75px)";
});

projectContainer.addEventListener("mouseleave", (e) => {
   projectContainer.style.transition = "all 1.0s ease";
   projectContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
   //Popback
   projectTitle.style.transform ="translateZ(0px)";
   projectStackImg.forEach(stackImg => {
   stackImg.style.transform ="translateZ(0px) rotateZ(0deg)";
   });
   projectDescription.style.transform ="translateZ(0px)";
   projectBtn.style.transform ="translateZ(0px)";
   viewBtn.style.transform ="translateZ(0px)";
   codeBtn.style.transform ="translateZ(0px)";
});