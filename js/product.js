let productDescMain = document.querySelector(".product .box-container");
console.log(productDescMain);
// let store = sessionStorage.getItem("store");
// console.log(store);
var para = new URLSearchParams(window.location.search);
var store = para.get("id");
// console.log(store);

let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + store + "";
// console.log(url);

fetch(url)
  .then((res) => res.json())
  .then((data) => productContent(data, productDescMain));

function productContent(data, main) {
  // for(let i=0; i < data.le)
  console.log(data);
  for (let i = 0; i < 1; i++) {
    let box = document.createElement("div");
    let ingredients = document.createElement("div");

    let rightBox = document.createElement("div");

    $(box).addClass("box col-lg-4");
    $(ingredients).addClass("ingredients d-flex");

    $(rightBox).addClass("col-lg-7");
    $(box).append(
      '<img src="' + data.meals[i].strMealThumb + '" class="productImg" alt="">'
    );
    $(rightBox).append(
      '<p class="productDesc"><span>Meal Name : </span>' +
        data.meals[i].strMeal +
        "</p>"
    );
    $(rightBox).append(
      '<p class="productDesc"><span>Meal Category : </span>' +
        data.meals[i].strCategory +
        "</p>"
    );
    $(rightBox).append(
      '<p class="productDesc"><span>Country Origin : </span>' +
        data.meals[i].strArea +
        "</p>"
    );
    $(rightBox).append(
      '<p class="productDesc"><span>How to make : </span>' +
        data.meals[i].strInstructions +
        "</p>"
    );
    // $(ingredients).append('<p class="productDesc"><span>Ingredients:</span></p>');
    // let ul = document.createElement("ul");
    // $(ul).addClass("mt-2 ml-5");

    // for (let a = 1; a < 10; a++) {
    //     let li = document.createElement("li");
    //     let strIngredient = data.meals[i].strIngredient + a;
    //     // console.log($(strIngredient).replace(/['"]+/g, ''));
    //     li.innerHTML = strIngredient;
    //     console.log(li);
    //     $(ul).append(li);
    // }
    let strVideo = data.meals[i].strYoutube;
    var videoSrc = new URL(strVideo);
    var videoId = videoSrc.searchParams.get("v");
    console.log(videoId);
    let productVideo = document.querySelector(".productVideo");
    productVideo.src = "https://www.youtube.com/embed/"+videoId+"";
    $(rightBox).append(ingredients);

    //   let boxInner = document.createElement("div");
    //   heading.innerHTML = store + " category";
    // let main = document.querySelector(".box-container");
    // $(box).addClass("box col-sm-12 col-md-6 col-lg-4 my-3");
    // $(boxInner).addClass("boxInner");
    // $(boxInner).append(
    //   '<a href="#" class="fas fa-heart"></a> <a href="#" class="fas fa-eye"></a>'
    // );
    // $(boxInner).append("");
    // $(boxInner).append("<h3>" + data.meals[i].strMeal + "</h3>");
    // $(boxInner).append(
    //   '<div class="stars"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div>'
    // );
    // $(boxInner).append(
    //   '<p class="desciption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo iure beatae in enim tenetur ipsum quidem neque autem magni!</p>'
    // );
    // // let store = "'"+data.categories[i].strCategory+"'";
    // // console.log(store)
    // $(boxInner).append(
    //   '<a href="#" onclick="category"  class="btn">read more</a>'
    // );
    // box.append(boxInner);
    
    main.append(box);
    main.append(rightBox);
    // console.log(box);
  }
}

//   sessionStorage.clear();
