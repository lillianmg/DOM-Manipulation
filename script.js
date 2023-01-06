let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  //part 1
document.querySelector("#main-title").textContent = "Something shorter";

//part 2
document.querySelector("body").style.backgroundColor = "blue";

//part 3
const favoriteThings = document.querySelectorAll("#favorite-things > li")

document
.querySelector("#favorite-things")
.removeChild(favoriteThings[favoriteThings.length - 1]);

//part 4
document.querySelectorAll(".special-title").forEach((item) => {
 item.style.fontSize = "2rem";
});

//part 5
document.querySelectorAll("#past-races > li").forEach((item) => {
 if (item.textContent.trim() === "Chicago") {
 document.querySelector("#past-races").removeChild(item);
 }
});

//part 6
const li = document.createElement("li");
li.textContent = "cincinnati";
document.querySelector("#past-races").appendChild(li);

//part 7
const blogPost = document.createElement("div");
blogPost.classList.add("blog-post");
blogPost.classList.add("purple");
const heading = document.createElement("h1");
heading.textContent = "Cincinnati";
const pE1 = document.createElement("p");
pE1.textContent = "My hometown of Cincinnati";
document.querySelector(".main").appendChild(blogPost);
blogPost.appendChild(heading);
blogPost.appendChild(pE1);

//part 8
document.querySelector("#quote-title").addEventListener("click", () => {
 randomQuote();
 });

//part 9
document.querySelectorAll(".blog-post").forEach((item) => {
 item.addEventListener("mouseout", (e) => {
  e.currentTarget.classList.toggle("purple");
  });
 item.addEventListener("mouseenter", (e) => {
 e.stopPropagation();
 e.currentTarget.classList.toggle("red");
  });
 });
});