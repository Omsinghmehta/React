const element=React.createElement("h1",{},"hello guys... how r u");
// ReactDOM.render(element,document.getElementById("bdy"));
const big=ReactDOM.createRoot(document.getElementById("bdy"));
big.render(element);