var swiper = new Swiper(".team-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

// Select all profile containers
const profileContainers = document.querySelectorAll('.profile-container');

// Loop through each profile container and attach event listeners
profileContainers.forEach(profileContainer => {
  const profile = profileContainer.querySelector('.profile');
  const profileCard = profileContainer.querySelector('.profile-card');
  const profileImg = profileContainer.querySelector('.profile-img');
  const profileName = profileContainer.querySelector('.profile-content h4');
  const profilePosition = profileContainer.querySelector('.profile-content p');
  const sikandarPosition = profileContainer.querySelector('.sikandar-position');

  // Mouseover event to apply hover effects
  profileContainer.addEventListener('mouseover', () => {
    profile.style.height = '250px';
    profile.style.borderRadius = '5px';
    profileCard.style.borderRadius = '5px';
    profileCard.style.transform = 'translateY(-80px)';
    profileImg.style.borderRadius = '5px';
    profileName.style.opacity = '1';
    profilePosition.style.opacity = '1';
    sikandarPosition.style.opacity = '1';
  });

  // Mouseout event to revert hover effects
  profileContainer.addEventListener('mouseout', () => {
    profile.style.height = '230px';
    profile.style.borderRadius = '50%';
    profileCard.style.borderRadius = '50%';
    profileCard.style.transform = 'translateY(0px)';
    profileImg.style.borderRadius = '50%';
    profileName.style.opacity = '0';
    profilePosition.style.opacity = '0';
    sikandarPosition.style.opacity = '0';
  });
});




/*
const teamContentContainer = document.getElementById('team-content-container');
const teamSlider = document.getElementById('team-slider');
const teamSlides = document.getElementsByClassName('team-slide').length;
const buttons = document.getElementsByClassName('btn');

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slideWidthPercent = 0;
let slidesCount = teamSlides;
let containerWidth = teamContentContainer.offsetWidth;

// Recalculate parameters on load and resize
window.addEventListener("resize", checkWidth);
checkWidth();  // Initial setup

function checkWidth() {
  containerWidth = teamContentContainer.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else if (w < 901) {
    slidesPerPage = 2;
  } else if (w < 1101) {
    slidesPerPage = 3;
  } else {
    slidesPerPage = 4;
  }

  slideWidthPercent = 100 / slidesPerPage;  // Calculate width of each card in percent
  slidesCount = teamSlides - slidesPerPage;  // Total steps available

  if (currentPosition > slidesCount) currentPosition = slidesCount;
  
  updateSliderPosition();
  updateButtons();
}

function updateSliderPosition() {
  currentMargin = -currentPosition * slideWidthPercent;
  teamSlider.style.marginLeft = `${currentMargin}%`;
}

function updateButtons() {
  buttons[0].classList.toggle('inactive', currentPosition === 0);
  buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}

function slideRight() {
  if (currentPosition > 0) {
    currentPosition--;
    updateSliderPosition();
    updateButtons();
  }
}

function slideLeft() {
  if (currentPosition < slidesCount) {
    currentPosition++;
    updateSliderPosition();
    updateButtons();
  }
}

// Event listeners for navigation buttons
buttons[0].addEventListener('click', slideRight);
buttons[1].addEventListener('click', slideLeft);

// Profile hover effect
const profileContainers = document.querySelectorAll('.profile-container');

profileContainers.forEach(profileContainer => {
  const profile = profileContainer.querySelector('.profile');
  const profileCard = profileContainer.querySelector('.profile-card');
  const profileImg = profileContainer.querySelector('.profile-img');

  profileContainer.addEventListener('mouseover', () => {
    profile.style.height = '250px';
    profile.style.borderRadius = '5px';
    profileCard.style.borderRadius = '5px';
    profileCard.style.transform = 'translateY(-80px)';
    profileImg.style.borderRadius = '5px';
  });

  profileContainer.addEventListener('mouseout', () => {
    profile.style.height = '230px';
    profile.style.borderRadius = '50%';
    profileCard.style.borderRadius = '50%';
    profileCard.style.transform = 'translateY(0px)';
    profileImg.style.borderRadius = '50%';
  });
});
*/

/*
const teamContentContainer = document.getElementById('team-content-container')
const teamSlider = document.getElementById('team-slider');
const teamSlides = document.getElementsByClassName('team-slide').length;
const buttons = document.getElementsByClassName('btn');


let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = teamSlides - slidesPerPage;
let containerWidth = teamContentContainer.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = teamContentContainer.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = teamSlides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    teamSlider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        teamSlider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        teamSlider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

// Profile start
//   profile-container
const profileContainers = document.querySelectorAll('.profile-container');

profileContainers.forEach(profileContainer => {
  const profile = profileContainer.querySelector('.profile');
  const profileCard = profileContainer.querySelector('.profile-card');
  const profileImg = profileContainer.querySelector('.profile-img');

  // Profile hover function
  profileContainer.addEventListener('mouseover', () => {
    profile.style.height = '250px';
    profile.style.borderRadius = '5px';
    profileCard.style.borderRadius = '5px';
    profileCard.style.transform = 'translateY(-80px)';
    profileImg.style.borderRadius = '5px';
  });

  profileContainer.addEventListener('mouseout', () => {
    profile.style.height = '230px';
    profile.style.borderRadius = '50%';
    profileCard.style.borderRadius = '50%';
    profileCard.style.transform = 'translateY(0px)';
    profileImg.style.borderRadius = '50%';
  });
});
*/
// Profile end