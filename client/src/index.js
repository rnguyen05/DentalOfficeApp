import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tui-calendar/dist/tui-calendar.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
