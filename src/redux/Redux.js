import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*import * as serviceWorker from './serviceWorker';*/
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}
store.subscribe(listener);
listener();

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
