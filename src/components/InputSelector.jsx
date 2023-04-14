  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { useNavigate, useLocation } from "react-router-dom";
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
          styles={{
            control: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? 'black' : '#332626', // establecer el color de fondo por defecto y cuando se enfoca el control
              borderRadius: '15px',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'white', // cambiar el color del texto del valor seleccionado
            }),
            container: (provided) => ({
              ...provided,
              width: '100%',
              margin: 'auto',
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: 'white',
              '&:hover': { color: 'grey' }
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              width: 0
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? 'purple' : '#332626',
              color: state.isFocused ? 'black' : 'white',
              '&:active': {
              backgroundColor: 'rgb(77, 11, 77)', // cambiar el color de fondo al hacer clic en el control
              },
            }),
          }}
        />
      </div>
    );
  };

  export default InputSelector;
