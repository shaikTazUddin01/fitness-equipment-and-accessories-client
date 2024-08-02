import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type TSelect={
    label:string;
    name:string;
    items:ReactNode[];
  }
const THSelect = ({name,label,items}:TSelect) => {
    const {register}=useFormContext()
    return (
        <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>

        <select
          className="select input input-bordered w-full "
          {...register(name)}
        >
          <option disabled selected>
            ---Select One---
          </option>
          {items?.map((item: any) => {
            return (
              <option key={item?._id} value={item?.name}>
                {item?.name}
              </option>
            );
          })}
        </select>
      </div>
    );
};

export default THSelect;