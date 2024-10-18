window.onload = function() {
    const wrapper = document.querySelector('.wrapper');
    const items = document.querySelectorAll('.items > li');
    const centerIndex = Math.floor(items.length / 2);
    const scrollToPosition = items[centerIndex].offsetLeft - (wrapper.clientWidth / 2) + (items[centerIndex].clientWidth / 2);
    wrapper.scrollLeft = scrollToPosition;
};