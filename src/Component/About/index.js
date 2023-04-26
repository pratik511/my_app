import React, { useRef, useState } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

const About = () => {
  const [inputValue, setInputValue] = useState();
  console.log("inputValue", inputValue);
  const inputRef = useRef(null);
  const handlePlaceSelect = (place) => {
    const Area = place.address_components?.find((component) =>
      component.types.includes("sublocality_level_1")
    )?.long_name;
    const country = place.address_components.find((component) =>
      component.types.includes("country")
    )?.long_name;
    let City = place.address_components.find((component) =>
      component.types.includes("locality")
    )?.long_name;
    const State = place.address_components.find((component) =>
      component.types.includes("administrative_area_level_1")
    )?.long_name;
    const Longitude = place.geometry.location.lng();

    const Latitude = place.geometry.location.lat();
    const Search = place.formatted_address;
    const SearchLocation = {
      Search: Search,
      CountryName: country,
      StateName: State,
      CityName: City,
      AreaName: Area,
      Latitude: Latitude,
      Longitude: Longitude
    };
    setInputValue({ ...inputValue, location: place?.formatted_address });

    if (inputRef && inputRef.current) {
      inputRef.current.value = country;
    }
  };
  const autocompleteProps = {
    apiKey: "AIzaSyAJU71Ot5zQxHitfFlFQ8W4WuykWZ6gU_k",
    onPlaceSelected: handlePlaceSelect,
    options: {
      fields: ["address_components", "geometry", "formatted_address"],
      strictBounds: false,
      types: ["establishment", "geocode"]
    },
    ref: inputRef
  };

  return (
    <div>
      About
      <ReactGoogleAutocomplete
        {...autocompleteProps}
        placeholder={"Search location"}
        // onPlaceSelected={onPlaceSelected}
        className="icon-input-alignment"
      />
      <div ref={inputRef}></div>
    </div>
  );
};

export default About;
