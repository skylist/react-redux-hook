import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from './redux-quack'

const Redux = () => (
    <Provider store={Store}><App /></Provider>
)

ReactDOM.render(<Redux />, document.getElementById('root'));
