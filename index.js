const navContent = document.querySelector('.nav__content');
const closeBtn = document.querySelector('.nav__close');
const navBtn = document.querySelector('.menubar');

navBtn.addEventListener('click',(e)=>{
  navContent.classList.toggle('active');
})

closeBtn.addEventListener('click',(e)=>{
  navContent.classList.toggle('active');
})