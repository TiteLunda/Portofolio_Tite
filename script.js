const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const toggleActiveClass = (element) => {
  element.classList.toggle('active');
};
const removeActiveClass = (element) => {
  element.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  toggleActiveClass(hamburger);
  toggleActiveClass(mobileMenu);
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeActiveClass(hamburger);
    removeActiveClass(mobileMenu);
  });
});

const cardData = [
  {
    id: 1,
    title: 'Keeping track of hundreds of components',
    technologies: ['HTML5', 'CSS', 'Javascript', 'DOM'],
    capstone1: './Images/mobile-popup.png',
    capstoneIntro1: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.</br></br> Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ',
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: 'https://github.com/TiteLunda/Portofolio_Tite',
    linkToSource: 'https://github.com/TiteLunda/Portofolio_Tite',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },

  {
    id: 7,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    popTechnologies1: ['Ruby on rails', 'css', 'Javascript'],
    image: './Images/mobile-popup.png',
    popTitle: 'Keeping track of hundreds of components',
    popTechnologies2: ['Codekit', 'GitHub', 'JavScript', 'Bootstrap', 'Terminal', 'Codepen'],
    btn1: 'See Live',
    btn2: 'See Source',
    linkToLiveSource: '#',
    linkToSource: '#',
  },
];

// all main cards goes there------------------------------------------------>

const allSixCards = document.getElementById('all-six-cards');
const popWindow1 = document.getElementById('popup-window');

function display() {
  let displayCard = '';
  for (let i = 1; i < cardData.length; i += 1) {
    displayCard += `<div class='project-card'>
                    
                    <div class="project-title">
                      <h3>${cardData[i].title}</h3>
                    </div>
                    
                    <ul class="project-abilites">
                      <li class="a1">${cardData[i].technologies[0]}</li>
                      <li class="a1">${cardData[i].technologies[1]}</li>
                      <li class="a1">${cardData[i].technologies[2]}</li>
                      <li class="a1">${cardData[i].technologies[3]}</li>          
                    </ul>   
                    
                      <div class="b_div">
                        <button data-modal-target = '.modal' type="button" class="see-button open-popup">
                          See Project
                        </button>
                    </div>
                  </div>
    `;
  }
  allSixCards.innerHTML = displayCard;
}

display();

function popDisplay() {
  const popScreen = `<div class="popup-2">
                    <img data-close-button class="desktop-close" src="./Images/Disabled.png" alt="popup close icon">
                    <div class="mobile-popup-img">
                    <img src= '${cardData[0].image}' alt="cover-picture-for-mobile-popup" class="cover">
                    <img data-close-button class ="close" src="./Images/Icon - Cancel.png" alt="popup close icon">
                    </div>
                    <div class="desktop-popup-buttons">
                        <button class="desk-btn-1">
                          <div class="popup-btn-text">${cardData[0].btn1}</div>
                          <div class="popup-icons">
                            <img src="./Images/see live icon.png" alt="see-live-icon">
                          </div>
                        </button>
                        <button class="desk-btn-2">
                        <div class="popup-btn-text">${cardData[0].btn2}</div>

                          <div class="popup-icons">
                            <img src="./Images/Icon -GitHub.png" alt="see-live-icon">
                          </div>
                        </button>
                      </div>
                    <div class="project-popup-title">
                    <h3>${cardData[0].popTitle}</h3>
                    <ul class="popup-project-abilites2">
                          <li class="a1">${cardData[0].popTechnologies2[0]}</li>
                          <li class="a1">${cardData[0].popTechnologies2[1]}</li>
                          <li class="a1">${cardData[0].popTechnologies2[2]}</li>
                          <li class="a1">${cardData[0].popTechnologies2[3]}</li>
                          <li class="a1">${cardData[0].popTechnologies2[4]}</li>
                          <li class="a1">${cardData[0].popTechnologies2[5]}</li>
                      </ul>

                    <ul class="popup-project-abilites">
                        <li class="a1">${cardData[0].popTechnologies1[0]}</li>
                        <li class="a1">${cardData[0].popTechnologies1[1]}</li>
                        <li class="a1">${cardData[0].popTechnologies1[2]}</li>
                    </ul> 
                    </div>
                    
                    <p class="mobile-popup-text">
                        ${cardData[0].capstoneIntro1}
                    </p>
                    <div class="mobile-popup-buttons">
                    <a href=${cardData[0].linkToLiveSource}>
                    <button class="btn">
                        <div class="popup-btn-text">${cardData[0].btn1}</div>
                        <div class="popup-icons">
                        <img src="./Images/see live icon.png" alt="see-live-icon">
                        </div>
                    </button>
                    </a>
                    <a href=${cardData[0].linkToSource}>
                    <button class="btn2">
                        <div class="popup-btn-text">${cardData[0].btn2}</div>
                        <div class="popup-icons">
                        <img src="./Images/Icon -GitHub.png" alt="see-live-icon">
                        </div>
                    </button>
                    </a>
                    </div>
                </div>`;

  popWindow1.innerHTML = popScreen;
}

popDisplay();
// popup functions goes there
const openMobilePopUp = document.querySelectorAll('[data-modal-target]');
const closeMobilePopUp = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

openMobilePopUp.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

closeMobilePopUp.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.mobile-popup-model');
    closeModal(modal);
  });
});