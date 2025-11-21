import React from "react";
import { useParams } from "react-router";
import useAxiosSecu from "../../../Hooks/useAxiosSecu";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecu();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>
        <span className="loading loading-infinity loading-xl"></span>
    </div>
  }
  return <div>
    <h2>pay kor: {parcel.parcelName}</h2>
    <button className="btn btn-primary text-black">Pay</button>
  </div>;
};

export default Payment;
