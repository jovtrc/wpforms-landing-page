const videoContainer = document.querySelector('.video__embed');
const videoEmbed = document.createElement('iframe');

videoEmbed.setAttribute('src', 'https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1&enablejsapi=1');
videoEmbed.setAttribute('class', 'video__iframe');
videoEmbed.setAttribute('allow', 'autoplay');
videoEmbed.setAttribute('frameborder', '0');

console.log(videoEmbed);

videoContainer.addEventListener('click', function() {
    this.innerHTML = '';
    this.appendChild(videoEmbed);

    this.classList.add('video__embed--open')
})