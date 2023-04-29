import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName } from "../store/slices/nameUser.slice";
import Go from "/go.png";
import LoadingOverlay from "./LoadingOverlay";

const InputHome = ({ setIsLogged }) => {
  const { handleSubmit, reset, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = (data) => {
    setLoading(true);
    dispatch(setName(data.nameUser));
    reset({
      nameUser: "",
    });
    setTimeout(() => {
      navigate("/pokedex");
      setLoading(false);
    }, 3000);
  };

  const clickLogged = () => setIsLogged(true);

  return (
    <>
    {!loading && (
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder=" Name"
          {...register("nameUser", { required: true })}
        />
        <button className="buttonGo" onClick={clickLogged}>
          <img src={Go} className="imageGo" alt="" />
        </button>
      </form>
    )}
    {loading && <LoadingOverlay />}
  </>
  );
};

export default InputHome;
