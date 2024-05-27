# CSS Page layout

This includes header, body, footer (if body content is very small, it will properly stick to bottom and if body content is more it will properly come after).

This layout uses Flexbox technique.

#### - Consider app or root div under body.

#### - Under this all header, footer markup will be defined like below.

```html
<div class="app">
  <!--header-->
  <div class="header">
    <nav class="main-nav" aria-label="Main menu">
      <ul class="main-menu">
        <li class="top-level-entry-container "><a href="/">Home</a></li>
      </ul>
    </nav>
  </div>
  <!--main-->
  <main><div>Hello to React World</div></main>
  <!--footer-->
  <div class="footer">some footer</div>
</div>
```

CSS to achieve

```css
/* body or root div */
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

/* header */

.header {
  /* padding: 1em;
    background: #ddd; */
  width: 100%;
}

/* main */

main {
  flex-grow: 2;
  /* margin: 2em; */
}

/* footer */
.footer {
  width: 100%;
  /* padding: 2em;
    background: gray; */
}
```
