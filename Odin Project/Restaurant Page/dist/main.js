(() => {
  "use strict";
  function e(e, t) {
    const n = document.createElement("button");
    return n.setAttribute("id", e), (n.innerHTML = t), n;
  }
  function t(e, t, n, o,) {
    
    const c = document.createElement("div");
    c.classList.add("container");
    const d = document.createElement("img");
    d.setAttribute("src", e), d.setAttribute("alt", t);
    const a = document.createElement("div");
    a.classList.add("description");
    const i = document.createElement("div");
    i.innerHTML = n;
    const r = document.createElement("div");
    return (
      (r.innerHTML = o),
      a.appendChild(i),
      a.appendChild(r),
      c.appendChild(d),
      c.appendChild(a),
      c
    );
  }
  const n = function () {
      const e = document.getElementById("tab-content");
      e.classList.add("flex"),
        (e.textContent = ""),
        [
          t(
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2021%252F07%252F13%252FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85",
            "burger",
            "Cheese Burger",
            "5.00$",
          ),
          t(
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Egg_Sandwich.jpg",
            "fishy",
            "Sandwich",
            "4.00$"
            
            
          ),
        ].forEach((t) => {
          e.append(t);
        });
    },
    o = function () {
      const e = document.getElementById("tab-content");
      e.classList.add("flex"), (e.innerHTML = "");
      const t = (function () {
        const e = document.createElement("div"),
          t = document.createElement("h2");
        (t.textContent = "HELLO"), e.appendChild(t);
        const n = document.createElement("p");
        return (
          (n.innerHTML =
            "Welcome to our restourant"),
          e.appendChild(n),
          e
        );
      })();
      e.appendChild(t);
    };
  (function () {
    console.log("called loadPage");
    const t = document.getElementById("content"),
      n = (function (e, t) {
        const n = document.createElement("header");
        n.setAttribute("id", "header");
        const o = document.createElement("h1");
        return (o.innerHTML = "Restourant Menu"), n.appendChild(o), n;
      })();
    t.appendChild(n);
    const o = (function (t) {
      const n = document.createElement("nav");
      n.setAttribute("id", "navi");
      const o = e("home", "Home"),
        c = e("menu", "Menu");
      return n.appendChild(o), n.appendChild(c), n;
    })();
    t.appendChild(o);
    const c = (function (e) {
      const t = document.createElement("main");
      return t.setAttribute("id", "tab-content"), t;
    })();
    t.appendChild(c);
  })(),
    o(),
    (function () {
      const e = document.getElementById("home"),
        t = document.getElementById("menu");
      e.addEventListener("click", o), t.addEventListener("click", n);
    })();
})();
