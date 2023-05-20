const btns = document.querySelectorAll(".btn");
const questions = document.querySelector(".questions");

// btns.forEach((btn)=>{
//     btn.addEventListener("click",)
// })

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.currentTarget.parentElement.parentElement;
console.log(value);
    value.classList.toggle("show-text");
  });
});
