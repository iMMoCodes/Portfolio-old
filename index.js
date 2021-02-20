// PROJECTS 

// Constants
const PROJECT_ONE_TITLE = "Recipe Search";
const PROJECT_TWO_TITLE = "Shopping Cart";
const PROJECT_THREE_TITLE = "Tic Tac Toe";

const PROJECT_ONE_DESC = "First one"
const PROJECT_TWO_DESC = "Second one"
const PROJECT_THREE_DESC = "Third one"

const PROJECT_ONE_URL = "https://github.com/iMMoCodes/Recipe-search";
const PROJECT_TWO_URL = "https://github.com/iMMoCodes/Shopping-Cart";
const PROJECT_THREE_URL = "https://github.com/iMMoCodes/Tic-Tac-Toe";

const PROJECT_ONE_LIVE_URL = "https://my-recipe-search-app-live.netlify.app/";
const PROJECT_TWO_LIVE_URL = "https://my-shopping-cart-app.netlify.app/";
const PROJECT_THREE_LIVE_URL = "https://my-tac-tic-toc-game.netlify.app/";

// Project Variables
const projectSection = document.querySelector(".projects-section");
const projectContainer = document.querySelector(".projects-container");
const projectTitle = document.querySelector(".projects-title");
const projectImg = document.querySelector(".project-img");
const projectStackImgs = document.querySelectorAll(".project-stack-img");
const projectStackOne = document.querySelector("#stack-one");
const projectStackTwo = document.querySelector("#stack-two");
const projectStackThree = document.querySelector("#stack-three");
const projectName = document.querySelector(".project-name");
const projectDescription = document.querySelector(".project-description");
const projectBtns = document.querySelectorAll(".project-choice");
const projectOneBtn = document.querySelector("#projectOne");
const projectTwoBtn = document.querySelector("#projectTwo");
const projectThreeBtn = document.querySelector("#projectThree");
const viewBtn = document.querySelector(".viewBtnLink");
const codeBtn = document.querySelector(".codeBtnLink");


// Moving Animation
projectContainer.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
   projectContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animate In
projectContainer.addEventListener("mouseenter", (e) => {
   projectContainer.style.transition = "none";
   // Popout
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
   // Popback
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
   // Project Image
   projectImg.setAttribute("src","./assets/recipe-search.png");
   // Project Stack
   projectStackOne.setAttribute("src","./assets/CSS.svg");
   projectStackTwo.setAttribute("src","./assets/JS.svg");
   projectStackThree.setAttribute("src","./assets/React.svg");
   // Staying Background Color
   if(projectTwoBtn.classList.contains("active-choice") || projectThreeBtn.classList.contains("active-choice")) {
      projectOneBtn.classList.add("active-choice");
      projectTwoBtn.classList.remove("active-choice");
      projectThreeBtn.classList.remove("active-choice");
      // Href To Code Button
      codeBtn.setAttribute("href",PROJECT_ONE_URL);
      // Href To Live Button
      viewBtn.setAttribute("href",PROJECT_ONE_LIVE_URL);
   };
   //
   }

const projectTwoChange = () => {
   projectName.innerHTML = PROJECT_TWO_TITLE;
   projectDescription.innerHTML = PROJECT_TWO_DESC;
   projectImg.setAttribute("src","./assets/shopping-site.png");
   projectStackOne.setAttribute("src","./assets/HTML.svg");
   projectStackTwo.setAttribute("src","./assets/CSS.svg");
   projectStackThree.setAttribute("src","./assets/JS.svg");
   if(projectOneBtn.classList.contains("active-choice") || projectThreeBtn.classList.contains("active-choice")) {
      projectTwoBtn.classList.add("active-choice");
      projectOneBtn.classList.remove("active-choice");
      projectThreeBtn.classList.remove("active-choice");
      codeBtn.setAttribute("href",PROJECT_TWO_URL);
      viewBtn.setAttribute("href",PROJECT_TWO_LIVE_URL);
   };
}

const projectThreeChange = () => {
   projectName.innerHTML = PROJECT_THREE_TITLE;
   projectDescription.innerHTML = PROJECT_THREE_DESC;
   projectImg.setAttribute("src","./assets/tic-tac-toe.png");
   projectStackOne.setAttribute("src","./assets/HTML.svg");
   projectStackTwo.setAttribute("src","./assets/CSS.svg");
   projectStackThree.setAttribute("src","./assets/JS.svg");
   if(projectOneBtn.classList.contains("active-choice") || projectTwoBtn.classList.contains("active-choice")) {
      projectThreeBtn.classList.add("active-choice");
      projectOneBtn.classList.remove("active-choice");
      projectTwoBtn.classList.remove("active-choice");
      codeBtn.setAttribute("href",PROJECT_THREE_URL);
      viewBtn.setAttribute("href",PROJECT_THREE_LIVE_URL);
   };
}


projectOneBtn.addEventListener("click",projectOneChange);
projectTwoBtn.addEventListener("click",projectTwoChange);
projectThreeBtn.addEventListener("click",projectThreeChange);