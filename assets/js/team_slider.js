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
