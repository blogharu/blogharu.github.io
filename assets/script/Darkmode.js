// dark mode

let darkToggle = document.querySelector(".set-darkmode");
let isDark = localStorage.getItem("isDark");
if (isDark === null){
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  localStorage.setItem("isDark", isDark);
}
// set initial setting
let Body = document.getElementsByTagName("body")[0]
if (isDark==="true"){
  Body.classList.add("dark");
  darkToggle.checked = true;
}

darkToggle.addEventListener('click', (event)=>{
  if (darkToggle.checked){
    Body.classList.add("dark");
  }
  else{
    Body.classList.remove("dark");
  }
  localStorage.setItem("isDark", darkToggle.checked);
})
