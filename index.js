const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closemenu = document.querySelector(".close-menu");
openMenu.addEventListener("click", () => {
  sideBar.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden"; // add this
});

closemenu.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto"; // add this
});

const faqItem = document.querySelectorAll(".faq-item");
faqItem.forEach(q => {
  q.addEventListener("click", (e) =>{
    const answer = q.nextElementSibling;
    const positveBtn = e.currentTarget.querySelector(".plus");
    const negativeBtn = e.currentTarget.querySelector(".minus");

    positveBtn.style.display = "none";
    negativeBtn.style.display = "inline-block";
    faqItem.forEach(item => {
      if(item !== q){
        const pBtn = item.querySelector(".plus");
        const nBtn = item.querySelector(".minus");
        pBtn.style.display = "inline-block";
        nBtn.style.display = "none"
      }
    });
    const faqAnswer = document.querySelectorAll(".answer");
    faqAnswer.forEach(a => {
      if(a !== answer){
        a.style.maxHeight = null;
        a.style.padding = null;
        a.style.border = null;
        a.querySelector(".answer-text").style.visibility = "hidden";
        
      }
    });
    // toggle answer
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
      answer.style.padding = null;
      answer.style.border = null;
      answer.querySelector(".answer-text").style.visibility = "hidden";
      positveBtn.style.display = "inline-block";
      negativeBtn.style.display = "none";
    }else{
      answer.style.maxHeight = 400 + "px"; 
      answer.style.padding = 1.5 + "rem";
      answer.style.border = `${1}px solid #3aa64c`;
      answer.querySelector(".answer-text").style.visibility = "visible";
      positveBtn.style.display = "none";
      negativeBtn.style.display = "inline-block";
    }
  })
})
