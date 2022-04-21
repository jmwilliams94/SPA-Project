
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


//Adding event listener for searchbar to add entered information to the API call
const customSearch = document.querySelector(".searchbar");

customSearch.addEventListener("click", e => {
    console.log(e);
})

