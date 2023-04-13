import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Select from "react-select";

const InputSelector = () => {
  const [types, setTypes] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState({
    label: `${pathname.split("/pokefilter/").join("")}`,
    value: `${pathname}`,
  });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => {
        const filteredTypes = res.data.results.filter((type) => {
          return (
            type.name !== "unknown" &&
            type.name !== "shadow" &&
            type.name !== "none"
          );
        });
        setTypes(filteredTypes);
      })
      .catch((error) => console.log(error));
  }, []);

  const typesObject = [{ label: "All", value: "All" }];

  for (let i = 0; i < types?.length; i++) {
    typesObject.push({
      label: types[i].name,
      value: types[i].name,
    });
  }

  const handleSelectChange = ({ value }) => {
    if (value === "All") {
      navigate(`/pokedex`);
    } else {
      navigate(`/pokefilter/${value}`);
    }
  };

  useEffect(() => {
    if (pathname === "/pokedex") {
      setSelectedOption({ label: "All", value: "All" });
    }
  }, [pathname]);

  return (
    <div className="selector">
      <Select
        className="typeSelector"
        placeholder="Filter by type"
        options={typesObject}
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          handleSelectChange(value);
        }}
      />
    </div>
  );
};

export default InputSelector;
