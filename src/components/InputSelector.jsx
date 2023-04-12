import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const InputSelector = () => {
  const [types, setTypes] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data?.results))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();

  const typesObject = [];

  for (let i = 0; i < types?.length; i++) {
    typesObject.push({
      label: types[i].name,
      value: types[i].name,
    });
  }

  const handleSelectChange = ({ value }) => {
    console.log(value);
    navigate(`/pokefilter/${value}`);
  };

  return (
    <div className="selector">
      <Select
        
        className="typeSelector" 
        placeholder="Filter by type" 
        options={typesObject} 
        onChange={handleSelectChange}
      />
      
    </div>
  );
};

export default InputSelector;