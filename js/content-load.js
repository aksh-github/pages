//Prevent the function to run before the document is loaded
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
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
    (function () {
      const markdownInst = createMarkdownObj().getInstance();
      const search = window.location.search;
      // console.log(search, window.location);
      const topic = search.split("=")?.[1];
      // console.log("get info for: ");
      fetch("./map.json")
        .then((res) => res.json())
        .then((map) => {
          console.log(map, map[topic]);
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
            });
        });
    })();
  }
});
