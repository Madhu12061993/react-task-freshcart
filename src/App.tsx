import './App.css'
import BestSells from './component/BestSells'
import Carousal from './component/Carousal'
// import Carousal from './component/Carousal'
import FeatureCarousal from './component/FeatureCarousal'
import Final from './component/Final'
import FreshCart from './component/FreshCart'
import LastAll from './component/LastAll'
import Navbr from './component/Navbr'
import PopularProducts from './component/PopularProducts'
import Shop from './component/Shop'

function App() {

  return (
    <>
      <div className="container">
        <FreshCart />
        <Navbr />
        <hr/>
        <Carousal/>
        <FeatureCarousal />
        <Shop />
        <PopularProducts />
        <BestSells />
        <Final />
      </div>
      <LastAll />
    </>
  )
}

export default App
