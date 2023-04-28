import React from "react";
import AdsComponent from "../CommonComponent/AdsComponent";
import AdsComponentFixed from "../CommonComponent/AdsComponentFixed";

const Contact = () => {
  return (
    <div>
      <h1>hello</h1>
      <AdsComponent dataAdSlot="4788656543" width="300" height="250" />
      {/* <AdsComponentFixed
        slot="4788656543"
        style={{
          display: "inline-block",
          width: "300px",
          height: "250px"
        }}
      /> */}
      
    </div>
  );
};

export default Contact;
