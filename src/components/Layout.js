import React from "react";
import Person from "./Person";
import { coreData } from "../utils/data";

const Layout = () => {
  return (
    <div className="bg-altdark py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container mt-5">
        <div className="row gx-md-5 gy-md-5 core-reveal">
          {coreData.map((element) => {
            return (
              <Person
                key={element.id}
                id={element.id}
                src={element.src}
                name={element.name}
                pos={element.pos}
                role={element.role}
                dept={element.dept}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
