const root = document.querySelector("#root");
const left_trigger = document.querySelector(".left");
const right_trigger = document.querySelector(".right");
const url = "https://jsonplaceholder.typicode.com/posts/";

let postNumber = 1;

function createPost(postData) {
  root.innerHTML = "";
  const title_p = document.createElement("p");
  const body_p = document.createElement("p");
  const container = document.createElement("div");

  title_p.innerText = postData.title;
  body_p.innerText = postData.body;

  container.classList.add("post");
  title_p.classList.add("subheader");

  container.append(title_p, body_p);
  root.append(container);
}

async function loadPost(url) {
  let response = await fetch(url + postNumber);
  let data = await response.json();
  createPost(data);
}

left_trigger.addEventListener("click", () => {
  postNumber--;
  loadPost(url);
});

right_trigger.addEventListener("click", () => {
  postNumber++;
  loadPost(url);
});
loadPost();