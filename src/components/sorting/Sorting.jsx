import "./sorting.scss"
import { AiFillInfoCircle } from 'react-icons/ai'

export default function Sorting({ tourslength, setsortedPostes, sortedPostes}) {
  return (
    <>
    <div className="sorting">
        <div className="container">
            <div className="available">
               {tourslength} Tours Found: <AiFillInfoCircle style={{marginLeft:"5px"}}/>
            </div>
            <select onChange={(e)=>{setsortedPostes(e.target.value)}} value={sortedPostes}>
                <option value="recommended">Recommended</option>
                <option value="high">Price - High to Low</option>
                <option value="low">Price - Low to High</option>
            </select>
        </div>
    </div>
    </>
  )
}
