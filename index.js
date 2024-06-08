
// const card = document.querySelectorAll("div.card")

// const observer = new IntersectionObserver(entry =>{
//   entry.forEach(entry =>{
//    entry.target.classList.toggle('show',entry.isIntersecting)
//   })
// },
// {
//     threshold:1
// })

// card.forEach((card)=>{
//     observer.observe(card)
// })

const bars = document.getElementById('bars')
const menu = document.getElementById('menu')
const xmark = document.getElementById('xmark')


bars.addEventListener('click',function(){
  menu.style.transform = 'translateX(0px)';
  menu.style.opacity = '1'
  this.style.textIndent = '-1000px';
  this.style.opacity = '0'
  xmark.style.opacity = '1'
})
xmark.addEventListener('click',function(){
  menu.style.transform = 'translateX(-1000px)';
 bars.style.textIndent = '-200px';
  bars.style.opacity = '1';
  this.style.opacity = '0'
})