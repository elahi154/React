const parent = React.createElement(
    "div",
    {id:"parent"},
   [React.createElement(
        "div",
         {id:"child"},
        [React.createElement("h1",{},"i am a tag"),
        React.createElement("h2",{},"i am a tag2")] 
    ), React.createElement(
        "div",
         {id:"child"},
        [React.createElement("h1",{},"i am a tag"),
        React.createElement("h2",{},"i am a tag2")] 
    )]
)
console.log(parent);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading=React.createElement("h1",
//     {id:"heading"},
//     "Hello! world from react :");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);