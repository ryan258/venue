import Header from './components/Header/Header'
import Featured from './components/Featured/'
import VenueInfo from './components/VenueInfo'
import Highlights from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/Footer/Footer'

import './resources/styles.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
      </>
      <Footer />
    </div>
  )
}

export default App
