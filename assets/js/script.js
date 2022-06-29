const header = document.querySelector('.header');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.remove('show__header');
    header.classList.add('hide__header');
  } else {
    if(window.scrollY === 0) {
      header.classList.remove('show__header');
    } else {
      header.classList.remove('hide__header');
      header.classList.add('show__header');
    }
  }
  lastScrollTop = scrollTop;
});

