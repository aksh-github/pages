let converter;
// const fetchData = (_url, type) => {
//   const url = "./data" + _url + "." + type;
//   console.log(url);

//   // if (!converter) converter = new showdown.Converter();

//   // fetch(url)
//   //   .then((res) => res.text())
//   //   .then((res) => {
//   //     //   console.log(res);

//   //     document.querySelector("main").innerHTML = converter.makeHtml(res);
//   //   });
// };

(function () {
  console.log("got it");
  function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
  }

  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
  }

  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      ele.className = ele.className.replace(reg, " ");
    }
  }

  function getMenuJson(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        return res;
      });
  }

  function buildList(list, rootPath) {
    const ul = document.createElement("ul");
    ul.classList.add("list");
    ul.classList.add("hide");

    list?.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = rootPath + item.href;
      a.textContent = item.text;
      a.dataset.type = item.type;
      li.appendChild(a);

      ul.appendChild(li);
    });
    return ul;
  }

  //Add event from js the keep the marup clean
  function init() {
    const path = window.location.pathname;
    let mapJsonUrl = null;

    if (path === "/" || path?.endsWith("pages/")) {
      mapJsonUrl = "./data/map.json?" + Date.now();
    } else {
      mapJsonUrl = "./map.json?" + Date.now();
    }

    getMenuJson(mapJsonUrl).then((res) => {
      const { list } = res;
      const ul = document.createElement("ul");
      ul.classList.add("list");

      // console.log(ul);

      list?.forEach((item) => {
        // console.log(item);

        const li = document.createElement("li");
        if (item.list) {
          li.textContent = item.text + " >";
          li.classList.add("collapsible");
          li.appendChild(buildList(item.list, item.rootPath));
        } else {
          // li.textContent = item.text;
          if (item?.href && !item?.innerLink) {
            const a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.text;
            // a.dataset.type = item.type;
            li.appendChild(a);
          } else {
            li.textContent = item.text;
          }
        }

        // console.log(li);
        ul.appendChild(li);
        document.querySelector(".real-menu").appendChild(ul);
      });

      // //   menu handler
      // document.querySelectorAll(".real-menu ul li").forEach((ele) => {
      //   ele.addEventListener("click", (e) => {
      //     // e.preventDefault();
      //     console.log(e.target);

      //     const url = e?.target?.getAttribute("href");
      //     if (url) fetchData(url, e.target.dataset.type);
      //   });
      // });

      document.querySelectorAll(".real-menu .collapsible").forEach((ele) => {
        ele.addEventListener("click", (e) => {
          // e.preventDefault();
          const ul = e.target.firstElementChild;
          // if (ul?.style.display === "none") ul.style.display = "block";
          // else ul.style.display = "none";
          if (ul) {
            if (hasClass(ul, "hide")) removeClass(ul, "hide");
            else addClass(ul, "hide");
          }
        });
      });

      // console.log(ul);
    });
    document
      .getElementById("btn-menu-toggle")
      ?.addEventListener("click", toggleMenu);
    document
      .getElementById("body-overlay")
      ?.addEventListener("click", toggleMenu);
  }

  //The actual fuction
  function toggleMenu() {
    var ele = document.getElementsByTagName("body")[0];
    if (!hasClass(ele, "menu-open")) {
      addClass(ele, "menu-open");
    } else {
      removeClass(ele, "menu-open");
    }
  }

  //Prevent the function to run before the document is loaded
  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      init();
    }
  });
})();
