import React from "react";
import Collapse from "./collapses/Collapse";

let data = "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."

const Test = () => {

  return (
    <div>
        <Collapse text={data}/>
        
    </div>
  );
};

export default Test;
