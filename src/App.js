import Header from './components/Header/Header'
import Featured from './components/Featured/'
import Footer from './components/Footer/Footer'

import './resources/styles.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>
      <Footer />
    </div>
  )
}

export default App
