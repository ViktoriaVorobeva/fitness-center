const videoContainer = document.querySelector('#player');

const createIframe = (block) => {
  const iframeTag = document.createElement('iframe');

  iframeTag.setAttribute('allowfullscreen', '');
  iframeTag.setAttribute('allow', 'autoplay');
  iframeTag.setAttribute('src', block.dataset.src);

  return iframeTag;
};

const playerInit = () => {
  if (videoContainer) {
    const startButton = document.querySelector('.gym__button');
    const previewImage = document.querySelector('.gym__preview');

    startButton.addEventListener('click', () => {
      const iframeVideo = createIframe(videoContainer);
      videoContainer.append(iframeVideo);
      startButton.classList.add('visually-hidden');
      if (previewImage) {
        previewImage.classList.add('visually-hidden');
      }
    });
  }
};

export {playerInit};
