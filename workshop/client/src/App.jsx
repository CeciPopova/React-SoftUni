import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import UserList from './Components/UserList'


function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <UserList />  
      </div>
      <Footer/>
    </>
  )
}

export default App
