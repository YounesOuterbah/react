import "./heroheader.scss"
import { BsSearch } from "react-icons/bs";

export default function HeroHeader() {
  return (
    <div className="hero_header">
        <div className="container">
            <form className="search" onClick={(e) => { e.preventDefault() }}>
                <BsSearch />
                <input type="search" placeholder="What are You Looking for?" />
                <input type="submit" value="Search"/>
            </form>
            <div className="text">
                <h2>Dubai</h2>
                <h1>Travel Around The World</h1>
            </div>
        </div>
    </div>
  )
}
