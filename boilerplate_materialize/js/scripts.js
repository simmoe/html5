document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

  });
