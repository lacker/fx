import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/containers/App';
import configureStore from './js/store/configureStore';

const store = configureStore();

// Don't edit Root directly, unless you are setting up global configuration.
// For app logic, see App in containers/App.js instead.
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
