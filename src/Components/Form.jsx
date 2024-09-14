import { useState } from "react";
import Message from "../Components/Message";

const Form = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (customer.name.trim().length < 5) {
      setError("The name must be at least 5 characters long.");
    } else if (!emailRegex.test(customer.email)) {
      setError("Please provide a valid email.");
    } else {
      setError(false);
      setShow(true);
    }
  };

  const reset = () => {
    setCustomer({
      name: "",
      email: "",
    });
    setShow(false);
    setError(false);
  };

  const { name, email } = customer;

  return (
    <>
      {show && <Message customer={customer} />}

      {!show && (
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <button onClick={reset} type="button">Reset form</button>
        </form>
      )}

      {error && <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>}
    </>
  );
};

export default Form;