
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

  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

  const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



  