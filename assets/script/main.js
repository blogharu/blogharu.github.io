
// Only run if it is localhost

function processFile(file){
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = ()=>{
    console.log(reader.result);
  }
}

const $target = document.querySelector(".wrap");

var xhr;

if (location.hostname === 'localhost'){
  class AppDevTool {
    constructor($target) {
      console.log($target);
      this.wrapper = document.createElement("div");
      this.wrapper.className = "wrap-app-dev-tool";
      $target.insertBefore(this.wrapper, $target.firstChild)

      this.render()
    }
    render(){
      let toolButton = document.createElement("div");
      toolButton.className = "div-tool-open";
      toolButton.innerText = "Dev"
      toolButton.addEventListener('click',this.onClickDivToolOpen);

      var input = document.createElement('input');
      input.type = "file";
      input.accept="text/plain, text/html, .jsp";

      input.click();
      input.onchange = function(event){
        console.log(event.target.files)
//        processFile(event.target.files[0]);
      }

      this.wrapper.appendChild(toolButton);
      this.wrapper.appendChild(input);

    }



    onClickDivToolOpen(event){
      console.log("ROCK");
      /*
      xhr = new XMLHttpRequest();
      xhr.open( 'GET', `file:///home/blogharu/Projects/font_size`, false);
      xhr.onreadystatechange = function ()
      {
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200 || xhr.status == 0)
            {

                var allText = xhr.responseText;
                console.log(allText)
                alert(allText);
            }
        }
      }
      xhr.send(null);
      return
      /* Github Comments feature
      xhr = new XMLHttpRequest();
      console.log(`https://api.github.com/repos/blogharu/blogharu.github.io/issues/1/comments`);
      console.log({
        owner: 'blogharu', repo: 'blogharu.github.io', issue_number: 1, body: 'I clicked'
      })
      xhr.open( 'POST', `https://api.github.com/repos/blogharu/blogharu.github.io/issues/1/comments`,
      {
        owner: 'blogharu', repo: 'blogharu.github.io', issue_number: 1, body: 'I clicked'
      });
      xhr.onload = ()=>{
        console.log(xhr)
        console.log(xhr.response);
      }
      xhr.send();
      */
    }
  }

  appDevTool = new AppDevTool($target);
}

// dark mode

let darkToggle = document.querySelector(".set-darkmode");
let isDark = sessionStorage.getItem("isDark");
if (isDark === null){
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  sessionStorage.setItem("isDark", isDark);
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
  sessionStorage.setItem("isDark", darkToggle.checked);
})
console.log(darkToggle.checked);
