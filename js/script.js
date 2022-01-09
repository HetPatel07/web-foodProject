// slider js

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

// slider js ends

// api call starts
   

// Categories api starts
let dishesMain = document.querySelector(".dishes.main .box-container");

let menuMain = document.querySelector("#menu .box-container");
// console.log(menuMain);
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((res) => res.json())
  .then((data) => content(data, dishesMain));

function content(data, main) {
  // for(let i=0; i < data.le)
  // console.log(data.categories.length);
  for (let i = 0; i < data.categories.length; i++) {
    let box = document.createElement("div");
    let boxInner = document.createElement("div");
    // let main = document.querySelector(".box-container");
    $(box).addClass("box col-sm-12 col-md-6 col-lg-4 my-3");
    $(boxInner).addClass("boxInner"); 
    $(boxInner).append(
      '<a href="#" class="fas fa-heart"></a> <a href="#" class="fas fa-eye"></a>'
    );
    $(boxInner).append(
      '<img src=" ' + data.categories[i].strCategoryThumb + '" alt="">'
    );
    $(boxInner).append("<h3>" + data.categories[i].strCategory + "</h3>");
    $(boxInner).append(
      '<div class="stars"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div>'
    );
    $(boxInner).append(
      '<p class="desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo iure beatae in enim tenetur ipsum quidem neque autem magni!</p>'
    );
    let store = data.categories[i].strCategory;
    // console.log(store)
    
    $(boxInner).append('<a href="./catergory.html?name='+store+'"  class="btn">Show more</a>');
    box.append(boxInner);
    main.append(box);
    // console.log(box);
  }
}
 
// function to redirect to category page
// function category(categoryName){
  
//   sessionStorage.setItem("store", categoryName);
//   // let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+categoryName+"";
//   // let categoryMain = sessionStorage.getItem("categoryMain");
//   // console.log(categoryMain);
//   // fetch(url)
//   // .then((res) => res.json())
//   // .then((data) => categoryContent(data,categoryMain));
//   window.location.href = "./catergory.html";
// }


// Categories api ends

// menu api starts
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
  .then((res) => res.json())
  .then((data) => menuContent(data, menuMain));

  function menuContent(data, main) {
    // for(let i=0; i < data.le)
    // console.log(data.categories.length);
    for (let i = 0; i < data.meals.length; i++) {
      let box = document.createElement("div");
      let boxInner = document.createElement("div");
      // let main = document.querySelector(".box-container");
      $(box).addClass("box col-sm-12 col-md-6 col-lg-4 my-3");
      $(boxInner).addClass("boxInner"); 
      $(boxInner).append(
        '<a href="#" class="fas fa-heart"></a> <a href="#" class="fas fa-eye"></a>'
      );
      $(boxInner).append(
        '<img src=" ' + data.meals[i].strMealThumb + '" alt="">'
      );
      $(boxInner).append("<h3>" + data.meals[i].strMeal + "</h3>");
      $(boxInner).append(
        '<div class="stars"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div>'
      );
      $(boxInner).append(
        '<p class="desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo iure beatae in enim tenetur ipsum quidem neque autem magni!</p>'
      );
      let productId = data.meals[i].idMeal;
      $(boxInner).append('<a href="./productDesc.html?id='+productId+'" class="btn">Read more</a>');
      box.append(boxInner);
      main.append(box);
      // console.log(box);
    }
  }
  // menu api ends


// api call ends
