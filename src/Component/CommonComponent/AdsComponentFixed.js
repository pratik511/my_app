import React, { useEffect  } from 'react';

const AdsComponentFixed = (props) => {

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
            console.log("1111111",e);
        }
    },[]);



    return (
        <>
            <ins className="adsbygoogle"
               style={props.style}
                data-ad-client="ca-pub-9761056074881586"
                >
            </ins>
        </>
    );
};

export default AdsComponentFixed;