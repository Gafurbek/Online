const searchBtn = document.querySelector('.search_menu_btn'),
      leftBtn = document.querySelector('.left_menu_btn'),
      leftBlock = document.querySelector('.left__menu'),
      searchMenu = document.querySelector('.search__menu'),
      searchBack = document.querySelector('.search__back'),
      leftBack = document.querySelector('.left__back'),
      border = document.querySelectorAll('.link__border'),
      darkBtn = document.querySelector('.dark_icon'),
      light = document.querySelector('.dark__mod'),
      modElement = document.querySelector('.telegram'),
      lightBtn = document.querySelector('.light__icon'),
      leftDownBtn = document.querySelector('.left__btn_down'),
      contact = document.querySelector('.contacti');


searchBtn.addEventListener('click',e => searchMenu.style.display = 'block');
searchBtn.addEventListener('click',e => document.querySelector('main').style.overflow = 'hidden');
leftBtn.addEventListener('click',e => leftBlock.style.transform = 'translateX(0)');
leftBtn.addEventListener('click',e => document.querySelector('main').style.overflow = 'hidden');
leftBtn.addEventListener('click',e => leftBack.style.display = 'block');
leftBtn.addEventListener('click',e => document.querySelector('main').scrollTo(0, 0));
searchBtn.addEventListener('click',e => document.querySelector('main').scrollTo(0, 0));
leftBack.addEventListener('click',e => leftBlock.style = clientInformation);
leftBack.addEventListener('click',e => leftBack.style.display= 'none');  
leftBack.addEventListener('click',e => document.querySelector('main').style = clientInformation);
searchBack.addEventListener('click',e => document.querySelector('main').style = clientInformation);
searchBack.addEventListener('click',e => searchMenu.style.display = 'none');
lightBtn.addEventListener('click',e => modElement.classList.remove('dark__mod'));
darkBtn.addEventListener('click',e => modElement.classList.add('dark__mod'));
leftDownBtn.addEventListener('click',e => contact.classList.toggle('active'))
// leftDownBtn.addEventListener('click',e => leftDownBtn.style.transform = 'rotate(180deg)');
leftDownBtn.addEventListener('click',e => leftDownBtn.classList.toggle ('active'));
// leftDownBtn.addEventListener('click', function(){
// if(contact.style = 'display: block'){
//     // contact.style = 'display: none'
// }})
// light.addEventListener('click',e => document.querySelector('.telegram').classList.remove('dark__mod'))


for (let i = 0; i < border.length; i++) {
    const tabItem = border[i];
    tabItem.addEventListener('click',function(){
        border[0].classList.remove('active')
        border[1].classList.remove('active')
        border[2].classList.remove('active')
        border[3].classList.remove('active')
        border[4].classList.remove('active')
        border[5].classList.remove('active')
        border[i].classList.add('active')
    })
  }

// if(leftBlock.style.transform = 'translateX(0)'){
//   document.querySelector('.left__back').style.display = 'none'
// }
// leftBtn.addEventListener('click', e => function(){
//   leftBlock.style.transform = 'translateX(0)'
//   // document.querySelector('main').style.overflow = 'hidden',
//   // document.querySelector('.left__back').style.display = 'block',
// })