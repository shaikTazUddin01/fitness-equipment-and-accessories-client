// import { TProduct } from "../../../Type";

import { FieldValues, SubmitHandler } from "react-hook-form";
import THForm from "../../form/THForm";
import THInput from "../../form/THInput";
import THSelect from "../../form/THSelect";
import { genderOPtions } from "../../../pages/userView/constant";
import { useUpdateUserMutation } from "../../../redux/features/auth/User/userApi";

const UpdateUserProfile = ({ userInfo }: { userInfo: any }) => {
    const [updateUser]=useUpdateUserMutation()
  const handleSubmit: SubmitHandler<FieldValues> = async(data) => {
    const res=await updateUser({id:userInfo?._id,userData:data})
    console.log(res);
  };

  return (
    <div>
      <button
        className="bg-textSecondary w-full mt-2 text-[16px] py-[5px] rounded-lg font-semibold"
        onClick={() => {
          const modal = document.getElementById(`${userInfo?._id}`);
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Edit Info
      </button>
      <dialog id={`${userInfo?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
          <div className="">
            <h1 className="text-xl text-center">Update Your InFo</h1>
            <THForm onSubmit={handleSubmit}>
              <THInput
                name="name"
                label="Name"
                defaultFieldValue={userInfo?.name}
                type="text"
              />
              <div className="flex gap-3 items-center">
              <THInput
                name="age"
                label="Age"
                defaultFieldValue={userInfo?.age}
                type="text"
              />
              <div className="w-full">
              <THSelect
                name="gender"
                label="Gender"
                items={genderOPtions}
                defaultFieldValue={userInfo?.gender}
              ></THSelect>
              </div>
              </div>
              <THInput
                name="address"
                label="Address"
                defaultFieldValue={userInfo?.address}
                type="text"
              />
              <THInput
                name="phoneNumber"
                label="Number"
                defaultFieldValue={userInfo?.phoneNumber}
                type="text"
              />
              <button
        className="bg-textSecondary w-full mt-2 text-[16px] py-[5px] rounded-lg font-semibold"
        type="submit"
      >
       Update Info
      </button>
            </THForm>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUserProfile;
