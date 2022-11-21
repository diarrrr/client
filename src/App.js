import React,{useEffect, useState} from 'react'

function App() {

  const [backendData, setBacknendData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then (
      Response => Response.json()
    ).then(
      data => {setBacknendData(data)})
  }, []);


  return (
    <div>
        {(typeof backendData.user === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.user.map((user, i) => (
            <p>{user}</p>
          ))
        )}




    </div>
  )
}

export default App