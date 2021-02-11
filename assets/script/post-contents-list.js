
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
      this.CONTENTS_MARGIN = 16;

      this.contents[0].id = "0";
      this.wrapper.innerHTML += `
      <a href='#0' style="margin:0 ${this.CONTENTS_MARGIN}px 0 ${this.CONTENTS_MARGIN}px;">
      ${this.contents[0].innerText}
      </a>`

      for (let i = 1 ; i < this.contents.length-1 ; i++){
        this.contents[i].id = String(i);
        if (this.contents[i].tagName === "H3"){
          this.wrapper.innerHTML += `
          <a href='#${i}' style="margin:0 ${this.CONTENTS_MARGIN*2}px 0 ${this.CONTENTS_MARGIN*2}px;">
          ${this.contents[i].innerText}
          </a>`
        }
        else if (this.contents[i].tagName === "H4"){
          this.wrapper.innerHTML += `
          <a href='#${i}' style="margin:0 ${this.CONTENTS_MARGIN*3}px 0 ${this.CONTENTS_MARGIN*3}px;">
          ${this.contents[i].innerText}
          </a>`
        }
        else if (this.contents[i].tagName === "H5"){
          this.wrapper.innerHTML += `
          <a href='#${i}' style="margin:0 ${this.CONTENTS_MARGIN*4}px 0 ${this.CONTENTS_MARGIN*4}px;">
          ${this.contents[i].innerText}
          </a>`
        }
      }

      this.contents[this.contents.length-1].id = String(this.contents.length-1);
      this.wrapper.innerHTML += `
      <a href='#${this.contents.length-1}' style="margin:0 ${this.CONTENTS_MARGIN*2}px 0 ${this.CONTENTS_MARGIN*2}px;">
      댓글
      </a>`

      this.contentsList = document.querySelectorAll('.contents-list a');
      this.curContent = this.contentsList[0];
//      this.curContent.classList.add("bold");
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
