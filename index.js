fetch("https://dog.ceo/api/breeds/image/random")
  .then((data) => data.json())
  .then((res) => {
    if (res.status !== "success") {
      return;
    }

    const imgSrc = res.message;
    document.querySelector(
      ".js-img-from-api"
    ).innerHTML = `<img src="${imgSrc}">`;
  });
