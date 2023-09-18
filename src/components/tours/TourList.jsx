import "./tourlist.scss"
import { BsFillStarFill, BsPersonFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

export default function TourList({ toursList }) {
  return (
    <>
    <div className="tour-list">
        <div className="container">
             {toursList.map(item => <div className="box" key={item.id}>
                <img src={item.image} alt={item.title}/>
                <div className="box_body">
                    <div className="title">{item.title}</div>
                    <span>Duration: {item.duration}</span>
                    <br />
                    <span>Rating: {item.rating}<BsFillStarFill style={{marginLeft:"5px"}}/></span>
                    <span style={{marginLeft:"15px"}}>Reviews: <BsPersonFill/>{item.reviews}</span>
                    <br />
                    <span style={{color:"red",fontWeight:"bold",fontSize:"22px"}}>From: ${item.priceFrom}</span>
                    <br />
                    <Link to={`/tour/${item.id}`} className="button">See More</Link>
                </div>
            </div>)} 
        </div>
    </div>
    </>
  )
}
