import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();

server.start({
    cors: {
        credentials: true
    }
}, deets => {
    console.log(`Server is running on port ${deets.port}`)
});

ReactDOM.render(<App />, document.getElementById('root'));