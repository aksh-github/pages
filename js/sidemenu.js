let converter;
const fetchData = (_url) => {
  const globObj = {
    "/Git": { type: "md" },
    "/sample": { type: "md" },
  };
  const url = "/data" + _url + "." + globObj[_url].type;
  console.log(url);

  if (!converter) converter = new showdown.Converter();

  fetch(url)
    .then((res) => res.text())
    .then((res) => {
      //   console.log(res);

      document.querySelector("main").innerHTML = converter.makeHtml(res);
    });
};

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

  //Add event from js the keep the marup clean
  function init() {
    document
      .getElementById("btn-menu-toggle")
      .addEventListener("click", toggleMenu);
    document
      .getElementById("body-overlay")
      .addEventListener("click", toggleMenu);

    document.querySelectorAll(".real-menu .collapsible").forEach((ele) => {
      ele.addEventListener("click", (e) => {
        e.preventDefault();
        const ul = e.target.nextElementSibling;
        // if (ul?.style.display === "none") ul.style.display = "block";
        // else ul.style.display = "none";
        if (hasClass(ul, "hide")) removeClass(ul, "hide");
        else addClass(ul, "hide");
      });
    });

    //   menu handler
    document.querySelectorAll(".real-menu ul li").forEach((ele) => {
      ele.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        const url = e?.target?.getAttribute("href");
        fetchData(url);
      });
    });
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
