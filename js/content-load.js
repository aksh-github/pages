const modifyFormat = () => {
  // 1. tabular
  const $tableContainers = document.querySelectorAll(".tabular");

  $tableContainers?.forEach(($cont) => {
    const $childArr = $cont?.textContent?.split(",");
    $cont.textContent = "";
    const df = document.createDocumentFragment();

    $childArr?.forEach((v) => {
      const $child = document.createElement("div");
      $child.textContent = v;
      df.appendChild($child);
    });

    $cont.append(df);
  });

  // 2. tab
  const $tabs = document.querySelectorAll(".tab");

  $tabs?.forEach(($tab) => {
    const tabDiv = $tab?.querySelectorAll("& > div");
    tabDiv?.forEach((d, idx) => {
      let csclss;
      if (idx % 2 === 0) {
        csclss = "left";
      } else {
        csclss = "right";
      }

      d.classList.add("column", csclss);
    });
  });
};

const createMarkdownObj = () => {
  let converter = new showdown.Converter();
  return {
    getInstance: () => {
      return converter;
    },
  };
};

const fetchData = (_url, type) => {
  console.log(_url);

  return fetch(_url)
    .then((res) => res.text())
    .then((res) => {
      // console.log(res);

      return res;
    });
};

//Prevent the function to run before the document is loaded
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    (function () {
      const markdownInst = createMarkdownObj().getInstance();
      const search = window.location.search;
      // console.log(search, window.location);
      const topic = search.split("=")?.[1];
      let allData;
      // console.log("get info for: ");
      fetch("./map.json")
        .then((res) => res.json())
        .then((map) => {
          console.log(map, map[topic]);
          allData = map;
          const listItem = map?.list?.find((it) => {
            // console.log(it);
            return it?.href?.endsWith(topic);
          });
          // console.log(listItem);
          if (listItem)
            fetchData("./" + listItem?.data?.[0]).then((markup) => {
              //   document.querySelector("main").innerHTML =
              //     markdownInst.makeHtml(markup);
              document.title += " | " + topic;
              document.querySelector("main .main-section").innerHTML =
                markdownInst.makeHtml(markup);
              //   console.log(markdownInst.makeHtml(markup));

              // simple to div
              modifyFormat();
            });
        });
    })();
  }
});
