import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'mobx-react';
import StyleStore from './stores/StyleStore';

const stores = {
  styleStore: new StyleStore(),
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
