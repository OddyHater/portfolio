const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('.sidenav__point');

function getCurrentSection() {
  let currentSection = sections[0];

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(window.pageYOffset >= sectionTop - 50) {
      currentSection = section;
    }
  });

  return currentSection;
}

function toggleMenu() {
  const currentSection = getCurrentSection();
  const currentSectionIndex = Array.from(sections).indexOf(currentSection);

  menuItems.forEach((item, index) => {
    if(index == currentSectionIndex) {
      item.classList.add('sidenav__point_active');
    } else {
      item.classList.remove('sidenav__point_active');
    }
  })
}

export  { toggleMenu }