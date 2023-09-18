import "./footer.scss"
import { languages, currencies } from "../../data"
import SelectBox from "./SelectBox"

export default function Footer() {
  return (
    <div className="footer">
        FOOTER Z3MA
        <div className="container">
            <SelectBox items={languages} name="Language"/>
            <SelectBox items={currencies} name="Currencies"/>
            copyright &copy; 2023
            coded by younes outerbah
        </div>
    </div>
  )
}