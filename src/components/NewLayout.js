import React from "react";
import Person from "./Person";
import { coreData } from "../utils/data";

const NewLayout = () => {
  return (
    <div className="bg-altdark py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container-lg mx-auto">
        <div className="row gx-5 gy-5 core-reveal">
          {coreData.map((element) => {
            return (
              <Person
                key={element.id}
                id={element.id}
                src={element.src}
                name={element.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewLayout;
