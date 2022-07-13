import { json } from "../services/json";
import { Card } from "./Card";

export function Main() {
  return (
    <div>
      <div className="center">
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
        ))}
      </div>
    </div>
  );
}
