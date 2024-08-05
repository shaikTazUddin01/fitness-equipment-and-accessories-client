import Swal from "sweetalert2";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../redux/features/category/category.api";
import { TCategory } from "../../../Type";
import { toast } from "sonner";

const ManageCategory = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation();
  const categorys: TCategory[] = data?.data;

  console.log("categoris-->",categorys);
  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  const handleDelete = async (id: string | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Delete This Product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteCategory(id);
        console.log(res);
        if (res?.data?.data) {
          toast.warning("Successfully you Delete This Product", {
            duration: 1500,
          });
        } else {
          toast.warning("something is wrong please try again..!", {
            duration: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="mb-10">
      <div className="overflow-x-auto bg-white rounded-xl">
        <table className="table text-center ">
          {/* head */}
          <thead>
            <tr className="text-[16px] text-black">
              <th>No.</th>
              <th>Image</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {categorys?.map(({ _id, name, image }, idx) => {
              return (
                <tr key={_id}>
                  <td>{idx + 1}</td>
                  <td className="flex justify-center">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={image} alt="category image" />
                    </div>
                  </td>
                  <td>{name}</td>
                  <td className="space-x-3">
                    <a href={`/admin/update-category/${_id}`}>
                      <button className="btn btn-success btn-sm">Edit</button>
                    </a>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageCategory;
