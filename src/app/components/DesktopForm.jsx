import React, { useState } from "react";
import DesktopFormComp from "./DesktopFormComp";

function DesktopForm({formName }) {
  const [load, setLoad] = useState(false);
  return (
    <section className="flex flex-col items-center w-full mx-auto">
      <div className="w-[90%]">
        <DesktopFormComp formName={formName} setLoad={setLoad} />

        <label
          className={`block cursor-pointer btn ${load && "opacity-50 "}`}
          htmlFor={`${formName}-submit`}
        >
          {load ? "Submitting..." : "Submit"}
        </label>
      </div>
    </section>
  );
}

export default DesktopForm;
