import '../sass/dark-theme/_dark-theme.scss';

const themeToggle = document.getElementById('theme-switch-toggle');
const tuiToggle = document.getElementById('tui-pagination-container');
const footer = document.getElementById('footer');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Footer = {
  LIGHT: 'footer__theme--light',
  DARK: 'footer__theme--dark',
}

themeToggle.addEventListener('click', onToggleClick);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    footer.classList.add(Footer.DARK);
    footer.classList.remove(Footer.LIGHT);
    tuiToggle.classList.add(Theme.DARK);
    tuiToggle.classList.remove(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
    

  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    footer.classList.remove(Footer.DARK);
    footer.classList.add(Footer.LIGHT);
    tuiToggle.classList.add(Theme.LIGHT);
    tuiToggle.classList.remove(Theme.DARK);
    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}

checkBodyTheme();
function checkBodyTheme() {
  const currentThemeMod = localStorage.getItem('bodyTheme');
  if (currentThemeMod === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);

    footer.classList.add(Footer.DARK);
    footer.classList.remove(Footer.LIGHT);
    
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
  }
  if (currentThemeMod === Theme.LIGHT) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);

    footer.classList.remove(Footer.DARK);
    footer.classList.add(Footer.LIGHT);


    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}
