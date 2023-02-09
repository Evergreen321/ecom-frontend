import React from "react";
import { useFormik } from "formik";

const Checkout2 = () => {
  const formik = useFormik({
    initialValues: {
      billingAddress: {
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
      },
      shippingAddress: {
        isSameAddress: true,
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
      },
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="billingAddress.firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.billingAddress.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="billingAddress.lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.billingAddress.lastName}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Checkout2;
