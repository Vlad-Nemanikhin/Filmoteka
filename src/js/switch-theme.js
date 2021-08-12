import '../sass/dark-theme/dark-theme.scss';

const themeToggle = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeToggle.addEventListener('click', onToggleClick);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
  }
  else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
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
    localStorage.setItem('bodyTheme', Theme.DARK);
    themeToggle.checked = true;
  }
  if (currentThemeMod === Theme.LIGHT) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('bodyTheme', Theme.LIGHT);
    themeToggle.checked = false;
  }
}
