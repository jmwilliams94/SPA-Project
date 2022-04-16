
//fetches API (working)
async function fetchAPI() {
    let response = await fetch('https://covid-19.dataflowkit.com/v1/');
    let data = await response.text();
    console.log(data);
}
fetchAPI();