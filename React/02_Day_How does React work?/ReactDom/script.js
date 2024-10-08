let root = document.getElementById('root');
// root.render(<h1>Hello, world!</h1>);
console.log(React)

console.log(ReactDOM)

var h1 = React.createElement('h1', null , "Hello From React Doc")
var h2 = React.createElement('h2', null , "Kese ho")



ReactDOM.createRoot(root).render(
[
h1,
h2,

]

)

