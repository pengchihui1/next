
import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext({})

const Navbar = () => {
  const { username } = useContext(AppContext)
  return (
    <div>
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}
const Messages = () => {
  const { username } = useContext(AppContext)
  return (
    <div>
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p>useContext is awesome!</p>
    </div>
  )
}

const Index = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert(`You clicked ${count} times`)
  }, [count])

  return (
    <div>
      <p>Hello world</p>
      <AppContext.Provider value={{ username: count }}>

        <p>Your clicke {count} times</p>

        <div className='App'>
          <button onClick={() => setCount(count + 1)}>点击 </button>
          <Navbar />
          <Messages />
        </div>
      </AppContext.Provider>
    </div>

  )
}

export default Index
