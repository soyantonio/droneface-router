import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from 'src/globalStyle'
import App from 'src/views/App'

ReactDOM.render(
    <>
        <App />
        <GlobalStyle />
    </>,
    document.getElementById("root")
);