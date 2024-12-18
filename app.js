import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {id:"heading"}, "Hello world!!!!! for React"), React.createElement("h2", {id:"heading"}, "Hello world!!!!! for React"), React.createElement("h3", {id:"heading"}, "Hello world!!!!! for React")]
        )
    )
    console.log(parent);

//<!-- Print Hello world using React -->
        const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, 
        "Hello world!!!!! for React");
        // console.log(heading); // object

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);
    