import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout';

// import FrontErrLog from 'frontend-errlog';

// let errlogger = new FrontErrLog({
//     remoteLogging: true,
//     remoteSettings: {
//         url: 'http://39.108.124.75:3333/sendErrInfo',
//         proId: '934a6861-7795-42ae-b997-0170e8d8a2f6',
//     }
// });


ReactDOM.render(<App />, document.getElementById('root'));
