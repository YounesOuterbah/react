import { useParams } from "react-router-dom"
import { toursList } from "../../data";

function SingleTour() {
  const {id} = useParams();

  const tour = toursList.find(t => t.id === parseInt(id))
  console.log(tour);
  
  return (
    <>
    <div>3nwan: {tour.title}</div>
    <div>Modat el ri7la: {tour.duration}</div>
    <div>
      <img src={tour.image} alt="" />
    </div>
    <div>Rating: {tour.rating}</div>
    <div>Price: {tour.priceFrom}</div>
    </>
  )
}

export default SingleTour