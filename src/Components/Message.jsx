const Message = ({ customer }) => {
  const { name, email } = customer;

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Thank you {name}!</h4>
      <h4>
        We will contact you as soon as possible via email {email}
      </h4>
    </div>
  );
};

export default Message;