import React from "react";
import Person from "./Person";
import { coreData } from "../utils/data";

const NewLayout = () => {
  return (
    <div className="bg-altdark py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container mt-5">
        <div className="row core-reveal">
          {coreData.map((element) => {
            return (
              <Person
                key={element.id}
                id={element.id}
                src={element.src}
                name={element.name}
                pos={element.pos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewLayout;
