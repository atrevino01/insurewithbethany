(function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.getElementById('site-navigation');
  if(toggle&&nav){toggle.addEventListener('click',function(){var open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});}
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=String(new Date().getFullYear());});
})();
