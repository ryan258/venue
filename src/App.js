import Header from './components/Header/Header'

import './resources/styles.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>
    </div>
  )
}

export default App
