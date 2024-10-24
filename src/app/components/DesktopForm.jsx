"use client";
import React, { useState } from "react";
import DesktopFormComp from "./DesktopFormComp";

function DesktopForm({formName , onSuccess}) {
  const handleFormSuccess = () => {
    onSuccess();
  };
  const [load, setLoad] = useState(false);
  return (
    <section className="flex flex-col items-center w-full mx-auto">
      <div className="w-[90%]">
        <DesktopFormComp formName={formName} setLoad={setLoad}  onSuccess2={handleFormSuccess}/>

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
