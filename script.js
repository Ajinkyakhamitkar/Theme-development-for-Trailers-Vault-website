$(document).ready(function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var slides = $(".slide");
    var arrows = $(".arrow");

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000); // Change slide every 4 seconds
  }

  $(".left-arrow").click(function() {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = $(".slide").length;
    }
    showSlides();
  });

  $(".right-arrow").click(function() {
    slideIndex++;
    if (slideIndex > $(".slide").length) {
      slideIndex = 1;
    }
    showSlides();
  });

});

//GRID JAVASCRIPT//

function openPopup(videoUrl) {
  var youtubePlayer = document.getElementById('youtube-player');
  youtubePlayer.src = videoUrl;

  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var youtubePlayer = document.getElementById('youtube-player');
  youtubePlayer.src = '';

  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
 function openPopup(videoUrl) {
    var youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = getEmbeddedVideoUrl(videoUrl);
    document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
    var youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = '';
    document.getElementById('popup').style.display = 'none';
  }

  function getEmbeddedVideoUrl(videoUrl) {
    var videoId = getVideoId(videoUrl);
    return 'https://www.youtube.com/embed/' + videoId;
  }

  function getVideoId(videoUrl) {
    var regex = /(?:[?&]|\b)(v=|embed\/|youtu.be\/|\/v\/|\/e\/|watch\?v=|\?v=|\/vi\/)([^#&?\/\s]+)/;
    var match = videoUrl.match(regex);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return 'Invalid video URL';
    }
  }

  // mobile hamburger //
 document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var overlayMenu = document.querySelector('.overlay-menu');
  var closeButton = overlayMenu.querySelector('.close-button');

  hamburger.addEventListener('click', function() {
    overlayMenu.classList.add('show');
  });

  closeButton.addEventListener('click', function() {
    overlayMenu.classList.remove('show');
  });
});