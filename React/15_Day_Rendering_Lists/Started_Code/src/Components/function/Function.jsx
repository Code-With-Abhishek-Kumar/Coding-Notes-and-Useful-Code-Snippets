
//  (IIFE) - Immediately Invoked Function Expression

const Function = () => {
    let age = 18;
  return (
    <>
    <h3>Function</h3>
    <div>Age: {age}</div>

    {(() => {
        if (age >= 18) {
          return <p>You are an adult.</p>;
        } else {
          return <p>You are a minor.</p>;
        }
      })()}
    
    </>
  )
}

export default Function