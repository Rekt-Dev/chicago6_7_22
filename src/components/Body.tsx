
impot json from "../ser"
import {Card} from "./Card"
export function Body(){


return (<div className="">
{json.map((obj) => (
  <div className="">
    <Card
      key={obj.id}
      artistName={obj.name}
      title={obj.title}
      year={obj.year}
      town={obj.town}
    />
  </div> 
  </div>)

}