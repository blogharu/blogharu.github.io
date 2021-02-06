
let isComment = localStorage.getItem('isComment')
let Comment = document.querySelector('.comment')
let SetComment = document.querySelector('.comment-wrap a')
SetComment.innerHTML = `<h3 style="padding-left:8px; width:auto; ">댓글 ▼</h3>`;

function toggleComment(){
  isComment = Comment.classList.toggle('hidden')
  if (isComment){
    SetComment.innerHTML = `<h3 style="padding-left:8px; width:auto;">댓글 ▼</h3>`;
  }
  else{
    SetComment.innerHTML = `<h3 style="padding-left:8px; width:auto;">댓글 ▲</h3>`;
  }
  localStorage.setItem('isComment', isComment)
}


if (isComment === "false"){
  toggleComment()
}

SetComment.addEventListener('click', ()=>{toggleComment()})
