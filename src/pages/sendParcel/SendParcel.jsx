import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { data, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecu from "../../Hooks/useAxiosSecu";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {user} = useAuth()

  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);

  const axiosSecure = useAxiosSecu()

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
          cost = minCharge + extraCharge;
      }
    }
    console.log('cost', cost)
    Swal.fire({
  title: `Agree With the Cost?`,
  text: `You will be charge! ${cost}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.post('/parcels',data)
    .then(res => {
      console.log('after saving parcel',res.data)
    })
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
  };

  return (
    <div>
      <h1>Send A Parcel</h1>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* document */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
              defaultChecked
            />
            Non-Document
          </label>
        </div>

        {/* parcelinfo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          {/*  */}
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>

            <label className="label">Sender Name </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
              defaultValue={user?.displayName}
            />
            {/* email */}
            <label className="label">Sender Email </label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
            />
            {/* add */}
            <label className="label">Sender Address </label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* phone */}
            <label className="label">Sender Phone Np </label>
            <input
              type="number"
              {...register("senderNumber")}
              className="input w-full"
              placeholder="Sender Number"
            />
            {/* region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Region</legend>
              <select
                defaultValue="Select A District"
                {...register("senderRegion")}
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">
                Sender District
              </legend>
              <select
                defaultValue="Select A District"
                {...register("senderDistrict")}
                className="select"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/*  */}
            <label className="label">Pickup Instruction</label>
            <textarea
              {...register("pickupInstruction")}
              className="textarea h-24 w-full"
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>
          {/* receiver details */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>

            <label className="label">Receiver Name </label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* email */}
            <label className="label">Receiver Email </label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Sender Email"
              required
            />
            {/* add */}
            <label className="label">Receiver Address </label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* phone */}
            <label className="label">Receiver Phone Np </label>
            <input
              type="number"
              {...register("receiverNumber")}
              className="input w-full"
              placeholder="Sender Number"
            />
            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Region</legend>
              <select
                defaultValue="Select A District"
                {...register("receiverRegion")}
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* reeiver district */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">
                Receiver District
              </legend>

              <select
                defaultValue="Select A District"
                {...register("receiverDistrict")}
                className="select w-full"
              >
                <option disabled>Select A District</option>

                {/* logic to show options */}
                {receiverRegion &&
                  districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
              </select>
            </fieldset>

            {/*  */}
            <label className="label">Delivery Instruction</label>
            <textarea
              {...register("deliveryInstruction")}
              className="textarea h-24 w-full"
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
        </div>
        <input type="submit" className="btn btn-primary " value="send parcel" />
      </form>
    </div>
  );
};

export default SendParcel;
