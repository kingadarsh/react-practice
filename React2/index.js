// // // // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//     return <h1>Hi!</h1>;
// };

// // Render the component to the root div
// ReactDOM.render(<App />, document.getElementById('root'));




import React, { createElement } from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("h1",{},"Hii this is react");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
