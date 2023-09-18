import "./services.scss"
import { BsFillStarFill,BsFillPeopleFill,BsBuildingsFill,BsGlobeEuropeAfrica } from 'react-icons/bs'

export default function Services() {
  return (
    <div className="services">
        <div className="container">
            <div className="cards">
                <div className="card">
                    <BsFillStarFill style={{marginRight:"5px"}}/>
                    Adverntuers
                </div>
                <div className="card">
                    <BsFillPeopleFill style={{marginRight:"5px"}}/>
                    Family Tours
                </div>
                <div className="card">
                    <BsBuildingsFill style={{marginRight:"5px"}}/>
                    City Cards
                </div>
                <div className="card">
                    <BsGlobeEuropeAfrica style={{marginRight:"5px"}}/>
                    Multy-day Trips
                </div>
            </div>
        </div>
    </div>
  )
}
