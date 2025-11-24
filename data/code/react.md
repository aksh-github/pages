## React Basics

- Its a **View** library from Facebook for building User Interfaces
- Its declarative means it specifies what will be done but not how it will be done.
- Component based

### Installation

### `npm i react react-dom`

### Code

```js
import React from "react";

// for React version = 18
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Sample App FC

const App = () => {
  return <div>Hello React</div>;
};

// for React version <= 17

import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
```

# Redux

### Installation

### `npm i redux react-redux`

```js
// all relevant React imports
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);


ReactDOM.createRoot(document.getElementById("root"))
    .render(<Provider store={store}>
            <App />
        </Provider>);


//reducer.js

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCR':
         return {
            ...state,
            counter: state.couter + 1
         }
      default:
         return state;
   }
}

export default rootReducer;


//App.js

import { useDispatch, useSelector } from "react-redux";


const App = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter)

    const increment = () => {
        dispatch({
            "INCR",
            //payload if any
        })
    }

    return <div>
    Hello React {counter}
    <button onClick={increment}> Increment </button>
    </div>
}


```

<script src="https://gist.github.com/aksh-github/4d1e335deb41d3c5de074c8ffa925433.js"></script>
