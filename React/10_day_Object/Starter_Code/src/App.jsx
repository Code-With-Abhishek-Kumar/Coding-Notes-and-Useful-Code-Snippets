
import './App.css'


function App() {

// JavaScript objects
  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
      margin: "4vh 4vw",
      width: "25vw",
      padding: "65px 12px"
    }
  };

  return (
    <div className='card' style={person.theme}>
    <h1>{person.name}'s Todos</h1>
    <img
    style={{borderRadius:"12px"}}
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
    <ul>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  </div>
  )
}

export default App
