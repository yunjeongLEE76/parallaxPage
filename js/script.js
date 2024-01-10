let scrollNum = 0;
// let documentHeight = 0;
// let windowHeight = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    item.style.transform = `translateY(${
      scrollNum / (2 * (totalNum - index))
    }px)`;
  });
  //   하단의 내용과 동일

  //   imageAll[0].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 0))
  //   }px)`;
  //   // -scrollNum/12

  //   imageAll[1].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 1))
  //   }px)`;
  //   //   -scrollNum/10

  //   imageAll[2].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 2))
  //   }px)`;

  //   imageAll[3].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 3))
  //   }px)`;

  //   imageAll[4].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 4))
  //   }px)`;

  //   imageAll[5].style.transform = `translateY(${
  //     scrollNum / (2 * (totalNum - 5))
  //   }px)`;
});
