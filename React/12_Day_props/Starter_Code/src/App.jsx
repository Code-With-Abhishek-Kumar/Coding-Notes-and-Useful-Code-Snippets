   {/* Props React mein ek tarah se data ko ek parent component se child component tak bhejne ka tareeqa hai. Yeh ek object hota hai jisme wo saari cheezein hoti hain jo parent ne child ko di hoti hain. Props read-only hote hain, yani child component sirf unko use kar sakta hai, modify nahi kar sakta. */}


import './App.css'
import Card_Container from './Components/Card'
import Header from './Components/Header'

function App() {

 // Passing information (props) to child components
  return (
    <>
 
 {/* Passing the "YourName" prop to the Header component */}
    <Header YourName="Abhishek Kumar" /> 
    {/* You can pass other props or leave it empty for Card_Container */}
     <Card_Container />
    </>
  )
}

export default App
