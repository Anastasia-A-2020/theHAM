const imagesForWork = [
  {
    category: "web-design",
    src: "./images/work/web.JPG",
    alt: "web",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/book.jpg",
    alt: "book",
    class: "work-img",
  },

  {
    category: "landing-pages",
    src: "./images/work/buttle.jpg",
    alt: "buttle",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/cup.jpg",
    alt: "cup",
    class: "work-img",
  },

  {
    category: "wordpress",
    src: "./images/work/devises.jpg",
    alt: "devises",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/tab.jpg",
    alt: "tab",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/note.jpg",
    alt: "note",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/box.jpg",
    alt: "boxs",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/pen.jpg",
    alt: "pen",
    class: "work-img",
  },

  {
    category: "landing-pages",
    src: "./images/work/cards.jpg",
    alt: "cards",
    class: "work-img",
  },
  
  {
    category: "wordpress",
    src: "./images/work/disk.jpg",
    alt: "disk",
    class: "work-img",
  },
  {
    category: "landing-pages",
    src: "./images/work/magasine.jpg",
    alt: "magasine",
    class: "work-img",
  },
];

const imagesForLoadMore = [
  {
    category: "web-design",
    src: "./images/work/banner.jpg",
    alt: "banner",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/banners-preview.jpg",
    alt: "bobanners-previewok",
    class: "work-img",
  },

  {
    category: "landing-pages",
    src: "./images/work/budmore.jpg",
    alt: "budmore",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/camera.jpg",
    alt: "camera",
    class: "work-img",
  },

  {
    category: "wordpress",
    src: "./images/work/chess.jpg",
    alt: "chess",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/desing-desk.jpg",
    alt: "desing-desk",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/dragon.jpg",
    alt: "dragon",
    class: "work-img",
  },

  {
    category: "web-design",
    src: "./images/work/linkedin.jpg",
    alt: "linkedin",
    class: "work-img",
  },

  {
    category: "graphic-design",
    src: "./images/work/money.jpg",
    alt: "money",
    class: "work-img",
  },

  {
    category: "landing-pages",
    src: "./images/work/scheme.jpg",
    alt: "scheme",
    class: "work-img",
  },
  
  {
    category: "wordpress",
    src: "./images/work/Stop-loss.jpg",
    alt: "Stop-loss",
    class: "work-img",
  },
  {
    category: "landing-pages",
    src: "./images/work/shopping.jpg",
    alt: "shopping",
    class: "work-img",
  },
]

const imagesForNews = [
  {
    src: "./images/news/photograf.jpg",
    alt: "photograf",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },

   {
    src: "./images/news/fire.jpg",
    alt: "fire",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
   {
    src: "./images/news/bike.jpg",
    alt: "bike",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
  {
    src: "./images/news/tab.jpg",
    alt: "tab",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
    
  {
    src: "./images/news/bird.jpg",
    alt: "bird",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
  {
    src: "./images/news/forest.jpg",
    alt: "forest",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
  {
    src: "./images/news/waterfall.jpg",
    alt: "waterfall",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
  {
    src: "./images/news/hands.jpg",
    alt: "hands",
    itemClass: "card",
    linkClass: "card-link",
    thumbClass: "card-thumb",
    dateClass: "card-date",
    textClass: "card-text",
    subtitleClass: "card-subtitle",
    descClass: "card-desc",
  },
];

// work
const workImagesList = document.querySelector(".work-images");

const filterWorkMenu = document.querySelector(".work-menu");
const newsList = document.querySelector(".news-list");

addMarkUpToPage({ images: imagesForWork, callback: markUpWorkImg, position: workImagesList });
addMarkUpToPage({ images: imagesForNews, callback: markupForNewsCard, position: newsList });
filterWorkMenu.addEventListener("click", onWorkFilter);

function markUpWorkImg (img) {
  return `<li class=${img.class} data-category=${img.category}>
      <img width="100%"  src=${img.src} alt=${img.alt}>
   </li>`
};

function addMarkUpToPage({ images, callback, position }) {
  const string = images.map(img => callback(img)).join("");
  position.insertAdjacentHTML("beforeend", string);
}

function onWorkFilter(e) {
  const workImages = document.querySelectorAll(".work-img");
  const filterCategory = e.target.dataset.filter;
  const activeFilter = document.querySelector(".active-filter");

  activeFilter?.classList.remove("active-filter");
  e.target.parentElement.classList.add("active-filter");
  
  workImages.forEach(el => {
    el.classList.remove("hide");
    if (el.dataset.category !== filterCategory && filterCategory !== "all") {
      el.classList.add("hide");
    }
  });  
}

// load more
const loadMoreBtn = document.querySelector(".btn-load-more");

loadMoreBtn.addEventListener("click", onLoadMoreBtmClick);

function onLoadMoreBtmClick(e) {
  const filterBtnAll = document.querySelector("[data-filter='all']");
  const filterActiveBtn = document.querySelector(".active-filter");

  e.currentTarget.style.display = "none";
  imagesForLoadMore.map(img => imagesForWork.push(img));  
  
  workImagesList.innerHTML = "";
  setTimeout(addMarkUpToPage, 50, { images: imagesForWork, callback: markUpWorkImg, position: workImagesList });
  filterActiveBtn.classList.remove("active-filter");
  filterBtnAll.parentElement.classList.add("active-filter");
}

// service
const serviseList = document.querySelector(".service-list");

serviseList.addEventListener("click", onServiceBtnClick);

function onServiceBtnClick(e) {
  const activeBtn = document.querySelector("[data-state='js-active']");
  
  if (activeBtn) {
    activeBtn.classList.remove("service-link--active");
    activeBtn.dataset.state = "";
    activeBtn.nextElementSibling.classList.add("is-hidden");
    
    e.target.classList.add("service-link--active");
    e.target.dataset.state = "js-active";
    e.target.nextElementSibling.classList.remove("is-hidden");
  } else {e.target.dataset.state = "js-active";}
  
}

// news
function markupForNewsCard(news) {
  const { itemClass, linkClass, thumbClass, dateClass, textClass, subtitleClass, descClass, src, alt} = news;
  return `<li class="item ${itemClass}">
      <a href="#" class="link ${linkClass}">
        <div class=${thumbClass}>
          <p class=${dateClass}> <span>12</span> <span>Feb</span></p>
          <img
            src=${src}
            alt=${alt}
            class="img"
          />
        </div>
        <div class=${textClass}>
          <h3 class=${subtitleClass}>Amazing Blog Post</h3>
          <p class=${descClass}>By admin | 2 comment</p>
        </div>
      </a>
    </li>`
}

// slider
let offsetSlider = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderNextBtn = document.querySelector(".slider-next");
const sliderPrevBtn = document.querySelector(".slider-prev");
const clientsFeedback = document.querySelectorAll(".client-feedback");

sliderLine.addEventListener("click", onSliderImgClick);
sliderNextBtn.addEventListener("click", onSliderNextBtnClick);
sliderPrevBtn.addEventListener("click", onSliderPrevBtnClick);

function onSliderNextBtnClick(e) {  
  const activeSlider = document.querySelector(".active-slide");
  const nextSlider = activeSlider.nextElementSibling;
  const passId = nextSlider? nextSlider.dataset.id : sliderLine.firstElementChild.dataset.id;
  activeSlider.classList.remove("active-slide");
  nextSlider?.classList.add("active-slide");
  
  if (!nextSlider) {
    activeSlider.classList.remove("active-slide");
    sliderLine.firstElementChild.classList.add("active-slide");
  }

  offsetSlider += 84;
  if (offsetSlider > 168) {
    offsetSlider = 0;
  }
  sliderLine.style.left = -offsetSlider + "px";  

  showFeedback(passId)
}

function onSliderPrevBtnClick(e) {
  const activeSlider = document.querySelector(".active-slide");
  const prevSlider = activeSlider.previousElementSibling;
  const passId = prevSlider? prevSlider.dataset.id : sliderLine.lastElementChild.dataset.id;
  activeSlider.classList.remove("active-slide");
  prevSlider?.classList.add("active-slide");
  
  if (!prevSlider) {
    activeSlider.classList.remove("active-slide");
    sliderLine.lastElementChild.classList.add("active-slide");
  }

  offsetSlider -= 84;

  if (offsetSlider < 0) {
    offsetSlider = 168;
  }

  sliderLine.style.left = -offsetSlider + "px";  
  showFeedback(passId);
}

function showFeedback(pass) { 
  const visibleFeedback = document.querySelector(".visible-feedback");
  visibleFeedback?.classList.remove("visible-feedback");
  visibleFeedback?.classList.add("is-hidden");

  clientsFeedback.forEach(el => {   
    if (el.dataset.id === pass) {
      el.classList.remove("is-hidden");
      el.classList.add("visible-feedback");
      }
    })
}

function onSliderImgClick(e) {
  if (e.target.tagName === "IMG") {
    const activeSlider = document.querySelector(".active-slide");
    const passId = e.target.dataset.id;
    activeSlider.classList.remove("active-slide");
    e.target.classList.add("active-slide");
    showFeedback(passId);
  }
}

// back to top
const btnBackToTop = document.getElementById("btnUp");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300) {
    btnBackToTop.classList.remove("is-hidden");
  } else {
    btnBackToTop.classList.add("is-hidden");
  }
})