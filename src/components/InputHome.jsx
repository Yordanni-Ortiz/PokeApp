import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName } from "../store/slices/nameUser.slice";
import Go from "/go.png";

const InputHome = ({ setIsLogged }) => {
  const { handleSubmit, reset, register } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (data) => {
    dispatch(setName(data.nameUser));
    reset({
      nameUser: "",
    });
    navigate("/pokedex");
  };

  const clickLogged = () => setIsLogged(true);

  return (
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
  );
};

export default InputHome;
