/* Refactoring */
//ux/ui 화면을 건드리지 않고 그대로 효과 적용하는 것

//날짜변경
document.addEventListener("DOMContentLoaded",()=>{
  const spanEl = document.querySelector('.logo span')
  spanEl.textContent=new Date().getFullYear();
})
import hero1 from '../images/hero1.png';

document.querySelector('.hero:nth-child(1) .image').style.backgroundImage = `url(${hero1})`;
