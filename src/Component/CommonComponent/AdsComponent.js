import React, { useEffect } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot, height, width } = props;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("window.adsbygoogle", window.adsbygoogle);
    } catch (e) {
      console.log("11111111111111111111111111", e);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: `${width}px`, height: `${height}px` }}
        data-ad-client="ca-pub-9761056074881586"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdsComponent;
