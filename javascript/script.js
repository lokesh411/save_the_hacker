let radio_btn=document.querySelectorAll(".radio");
let radio_option=document.querySelectorAll(".radio-choice")
for (let i = 0; i < radio_btn.length; i++) {
  radio_btn[i].addEventListener("click", function(){
    removeActive();
    radio_btn[i].classList.add("radio-active");
    radio_option[i].classList.add("radio-choice-active");
  });
}
function removeActive(){
  let radio_active=document.querySelector(".radio-active");
  radio_active.classList.remove("radio-active");
  let radio_choice_active=document.querySelector(".radio-choice-active");
  radio_choice_active.classList.remove("radio-choice-active");
}
