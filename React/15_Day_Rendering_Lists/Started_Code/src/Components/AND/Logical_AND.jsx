

const Logical_AND = () => {
 let isLoggedIn = true;
  return (
  
        
        <div>
       <h2>Welcome to the site!</h2>
      {isLoggedIn && <p>You are logged in.</p>} {/* Render only if true */}
      </div>
 
  )
}

export default Logical_AND