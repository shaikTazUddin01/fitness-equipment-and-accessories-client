import React from "react";
import { useFormContext } from "react-hook-form";

type TInput={
  label:string;
  name:string;
  type:string;
}

const THInput = ({label,name,type}:TInput) => {
  const { register } = useFormContext();
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={`${label}`}
        className="input input-bordered"
        {...register(name)}
        required
      />
    </div>
  );
};

export default THInput;
