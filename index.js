const DEFAULT_INTRO_TEXT = "🤔Стало скучно?";
const DEFAULT_MAIN_TEXT = "Не знаешь, чем заняться?";
const ACTIVE_INTRO_TEXT = "УРА! Теперь не скучно!";

const introTextNode = document.getElementById("introText");
const actionOutputNode = document.getElementById("actionOutput");
const addActionBtnNode = document.getElementById("addActionBtn");
const translateActionBtnNode = document.getElementById("translateActionBtn");

initApp();

function initApp() {
  introTextNode.innerText = DEFAULT_INTRO_TEXT;
  actionOutputNode.innerText = DEFAULT_MAIN_TEXT;
}

function getActionFromApi() {
  fetch("http://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const actionFromApi = res.activity;
      //   console.log(actionFromApi);
      actionOutputNode.innerText = `${actionFromApi}`;
    });
}

function changeIntroTextAndBackground() {
  introTextNode.innerText = ACTIVE_INTRO_TEXT;
  document.body.classList.add("active");
}

function actionBtnHandler() {
  changeIntroTextAndBackground();
  getActionFromApi();
}

addActionBtnNode.addEventListener("click", actionBtnHandler);
// translateActionBtnNode.addEventListener("click", translateBtnHandler);

// function translateBtnHandler() {
//   fetch("https://libretranslate.com/translate", {
//     method: "POST",
//     body: JSON.stringify({
//       q: "actionFromApi.value",
//       source: "en",
//       target: "ru",
//       format: "text",
//       api_key: "",
//     }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       actionTranslation = data.translatedText;
//       console.log(data.translatedText);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
