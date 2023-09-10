const addActionBtn = document.getElementById("addActionBtn");
const actionOutput = document.getElementById("actionOutput");

function getActionFromApi() {
  fetch("http://www.boredapi.com/api/activity")
    .then((data) => data.json())
    .then((res) => {
      if (res.status !== "success") {
        return null;
      }
      //const actionFromApi = res.activity;
      console.log(res.activity);
      //document.getElementById("actionOutput").innerText = `${actionFromApi}`;
    });
}

addActionBtn.addEventListener("click", getActionFromApi);

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((data) => data.json())
//   .then((res) => {
//     if (res.status !== "success") {
//       return;
//     }
//     const imgSrc = res.message;
//     document.querySelector(
//       ".js-img-from-api"
//     ).innerHTML = `<img src="${imgSrc}">`;
//   });
