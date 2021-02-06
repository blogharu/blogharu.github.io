class PostComments{
  constructor($target){
    this.state = {}
    this.xhr = new XMLHttpRequest();

    xhr = this.xhr;

    this.wrapper = document.querySelector(".post-comments-holder")
    this.id = this.wrapper.getAttribute('id');

    this.requestComments();
  }

  setState(newState){
    this.state = newState;
    this.render()
  }

  requestComments(){
    this.xhr.open( 'GET', `https://api.github.com/repos/blogharu/blogharu.github.io/issues/${this.id}/comments`);
    this.xhr.onload = ()=>{
      // success
      if (this.xhr.status >= 200 && this.xhr.status < 400){
        let comments = JSON.parse(this.xhr.response)
        this.setState({comments:comments})
      }
      else {
        document.querySelector(post-comments).classList.add('hidden');
      }
    }
    this.xhr.send();
  }

  render(){
    this.wrapper.innerHTML = ""
    for (let comment of this.state.comments){
      let divComment = document.createElement('div');
      divComment.className = "post-comment";
      divComment.innerHTML = `
        <span class="post-comment-image">
          <img src="${comment.user.avatar_url}" width="45px" height="45px">
        </span>
        <span class="post-comment-text">
          <div class="post-comment-text-user"><pre><b>${comment.user.login}</b>  ${comment.created_at}</pre></div>
          <div><pre>${comment.body}</pre></div>
        </span>
      `;
      this.wrapper.appendChild(divComment);
    }
    this.wrapper.classList.remove('hidden');
  }
}
var xhr = 0
new PostComments(document.querySelector('.post-comments-holder'))
