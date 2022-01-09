let categoryMain = document.querySelector(".category .box-container");
      // let store = sessionStorage.getItem("store");
      // console.log(store);
      var para = new URLSearchParams(window.location.search);
      var store = para.get("name");
      console.log(store);

      let url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        store +
        "";
      console.log(url);

      fetch(url)
        .then((res) => res.json())
        .then((data) => categoryContent(data, categoryMain));
      function categoryContent(data, main) {
        // for(let i=0; i < data.le)
        console.log(data);
        for (let i = 0; i < data.meals.length; i++) {
          let box = document.createElement("div");
          let boxInner = document.createElement("div");
          let heading = document.querySelector("h1");

          heading.innerHTML = store + " category";
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
          // console.log(store)
          $(boxInner).append(
            '<a href="./productDesc.html?id='+productId+'" class="btn">Read more</a>'
          );
          box.append(boxInner);
          main.append(box);
          // console.log(box);
        }
      }

    //   sessionStorage.clear();
      console.log(categoryMain);