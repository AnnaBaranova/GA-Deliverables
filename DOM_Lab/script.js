
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr")

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";


topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


menuLinks.forEach(function (el) {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", el.href);
  aEl.textContent = el.text;
  topMenuEl.appendChild(aEl);
})


const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";



const topMenuLinks = document.querySelectorAll("a");

let showingSubMenu = false;

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  let linkName = e.target;
  if (linkName.tagName === "A") {
    console.log(linkName.textContent)
  } else {
    console.log("wrong click");
  };

  if (linkName.classList.contains("active")) {
    linkName.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return 
  }
  topMenuLinks.forEach (function (el) {
    el.classList.remove("active");
  });
  linkName.classList.add("active");
  if (menuLinks["subLinks"]){
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
});
