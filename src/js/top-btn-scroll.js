TopBtnScroll = document.getElementById('scroll-btn');

TopBtnScroll.addEventListener('click', ScrollTop);

function ScrollTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}
