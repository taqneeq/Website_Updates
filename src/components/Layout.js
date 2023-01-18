import React from "react";
import Person from "./Person";
import { coreData } from "../utils/data";

const Layout = () => {
  return (
    <div className="bg-altdark py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container-lg mx-auto">
        <div className="row my-5 gx-5 gy-5 core-reveal justify-center">
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

export default Layout;
