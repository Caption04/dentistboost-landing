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

    const faqAnswer = document.querySelectorAll(".answer");
    faqAnswer.forEach(a => {
      if(a !== answer){
        a.style.maxHeight = null;
        
      }
    });
    // toggle answer
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
      positveBtn.style.display = "inline-block";
      negativeBtn.style.display = "none";
    }else{
      answer.style.maxHeight = answer.scrollHeight + "px"; 
      positveBtn.style.display = "none";
      negativeBtn.style.display = "inline-block";
    }
  })
})
