
{
  class PostContentsList {
    addSpace(element, times){
      for (let i = 0 ; i < times ; i++){
        element.innerHTML += "&nbsp"
      }
    }
    constructor(){
      this.wrapper = document.querySelector('.contents-list');

      this.contents = document.querySelectorAll('h3, h4, h5');

      for (let i = 0 ; i < this.contents.length ; i++){
        this.contents[i].id = String(i);
        this.wrapper.innerHTML += `
        <a href='#${i}'>
        ${this.contents[i].innerText}
        </a>
        <br>`
      }

      this.contentsList = document.querySelectorAll('.contents-list a');
      this.curContent = this.contentsList[0];
      this.curContent.classList.add("bold");
      window.addEventListener('scroll', (event)=>{
        this.curContent.classList.remove("bold");
        let curY = window.pageYOffset
        for (var i = 1 ; i < this.contents.length ; i++){
          if (curY < this.contents[i].offsetTop-15){
            this.curContent = this.contentsList[i-1]
            this.curContent.classList.add("bold")
            return
          }
        }
        this.curContent = this.contentsList[i-1]
        this.curContent.classList.add("bold")
      })
    }
  }
  new PostContentsList();
}
