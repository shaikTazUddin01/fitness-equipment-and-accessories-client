import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useGetOrderbySpUserQuery } from "../../redux/features/order/orderapi";

const PaymentHistory = () => {
  const { id }: any = useAppSelector((state) => state?.userLoginInfo?.user);

  const { data, isLoading } = useGetOrderbySpUserQuery(id);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const orderHistroy=data?.data
console.log(orderHistroy);
  return (<div>
<div className="min-h-[80vh] max-w-7xl flex flex-col" >
        {orderHistroy?.length > 0 ? (
            <div>
              <h1 className="text-3xl font-semibold text-center mb-5">Payment History</h1>
            <div className="overflow-x-auto bg-white rounded-xl w-full px-10 ">
            <table className="table   text-center">
              {/* head */}
              <thead className="">
                <tr className="font-bold text-[16px]">
                 
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  {/* <th>Category</th> */}
                  <th>Transation Id</th>
                  <th>Payment Method</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody >
                {orderHistroy?.map((item: any) => (
                 <tr key={item?.id}>
              <td>{item?.customerName}</td>
              <td>{item?.customerEmail}</td>
              <td>{item?.customerNumber}</td>
              <td>{item?.transationId}</td>
              <td>{item?.paymentMethos}</td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-3xl text-white mt-10">
              No Item Added To The Cart..!
            </h1>
          </div>
        )}
      </div>
  </div>);
};

export default PaymentHistory;
