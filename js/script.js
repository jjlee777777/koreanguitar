// JavaScript Document

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("nav a, .logo a, .main-btn");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) return;

    const targetPage = document.querySelector(targetId);

    if (!targetPage) return;

    e.preventDefault();

    pages.forEach(page => {
      page.classList.remove("active");
    });

    targetPage.classList.add("active");

    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});


/* Concert Poster + Info Auto Change */
const posterImage = document.getElementById("posterImage");
const concertTitle = document.getElementById("concertTitle");
const concertDate = document.getElementById("concertDate");
const concertPlace = document.getElementById("concertPlace");

if (posterImage) {
  const concerts = [
    {
      image: "images/poster01.jpg",
      title: "2026년 코리안기타앙상블 송년 연주회",
      date: "2026. 12. 19(토) 오후 5시 30분",
      place: "대학로 브이씨어터 콘서트 홀"
    },
    {
      image: "images/poster02.jpg",
      title: "2026년 코리안기타앙상블 송년 연주회",
      date: "2026. 12. 19(토) 오후 5시 30분",
      place: "대학로 브이씨어터 콘서트 홀"
    }
  ];

  let concertIndex = 0;

  setInterval(() => {
    posterImage.style.opacity = 0;

    if (concertTitle) concertTitle.style.opacity = 0;
    if (concertDate) concertDate.style.opacity = 0;
    if (concertPlace) concertPlace.style.opacity = 0;

    setTimeout(() => {
      concertIndex++;

      if (concertIndex >= concerts.length) {
        concertIndex = 0;
      }

      posterImage.src = concerts[concertIndex].image;

      if (concertTitle) concertTitle.textContent = concerts[concertIndex].title;
      if (concertDate) concertDate.textContent = concerts[concertIndex].date;
      if (concertPlace) concertPlace.textContent = concerts[concertIndex].place;

      posterImage.style.opacity = 1;

      if (concertTitle) concertTitle.style.opacity = 1;
      if (concertDate) concertDate.style.opacity = 1;
      if (concertPlace) concertPlace.style.opacity = 1;

    }, 600);

  }, 6000);
}



