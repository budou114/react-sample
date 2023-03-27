import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
// import Counter from './components/Counter';
// import Counter2 from './components/Counter2';
// import Parent from './components/ContainerSample';
// import Page from './components/ContextSample';
// import Message from './components/Message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    {/* <Message /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    {/* <Counter initialValue={0} /> */}
    {/* <Counter2 initialValue={0} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
