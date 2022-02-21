const sliders = document.querySelector(".carousel-box");
let scrollPerClick;
let ImagePadding = 20;

showMovieData();

let scrollAmount = 0;

function sliderScrollLeft(){
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0){
        scrollAmount = 0;
    };
}
function sliderScrollRight(){
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    };
}









async function showMovieData() {
    const api_key = "5b0f0bd1dd7e0bd3e45e27a3a82d1d9d";

    let result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    );

    result = result.data.results;

    result.map((cur, index) => {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185${cur.poster_path}">`
        );
    });

    scrollPerClick = document.querySelector(".img-1").clientWidth + ImagePadding;
}