
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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
  