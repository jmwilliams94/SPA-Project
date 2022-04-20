
//fetches API (working)
// let country = Data which is entered into search bar - then add this as string interpolation to the fetch?

async function fetchAPI(location) {
    fetch(`https://covid-19.dataflowkit.com/v1/${location}`).then(response => {
        return response.json();   
    })
    .then(data => {
        console.log(data)
    })
}

fetchAPI();

let customSearch = document.querySelector("searchbar");

addEventListener("click", e => {
    console.log(e);
})

