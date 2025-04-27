
  const images = document.querySelectorAll('.carousel img');
  let index = 0;

  function showImage(i) {
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === i);
    });
  }

  function next() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }





  const images2 = document.querySelectorAll('.carousel2 img');
  let index2 = 0;

  function showImage2(d) {
    images2.forEach((img2, idx2) => {
      img2.classList.toggle('active', idx2 === d);
    });
  }

  function next2() {
    index2 = (index2 + 1) % images2.length;
    showImage2(index2);
  }

  function prev2() {
    index2 = (index2 - 1 + images2.length) % images2.length;
    showImage2(index2);
  }




  const images3 = document.querySelectorAll('.carousel3 img');
  let index3 = 0;

  function showImage3(k) {
    images3.forEach((img3, idx3) => {
      img3.classList.toggle('active', idx3 === k);
    });
  }

  function next3() {
    index3 = (index3 + 1) % images3.length;
    showImage3(index3);
  }

  function prev3() {
    index3 = (index3 - 1 + images3.length) % images3.length;
    showImage3(index3);
  }
