export default function DetailsCard({ dentist }) {
  const { id, name, email, phone, website } = dentist;

  return (
    <div className="card" style={{ width: "90%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="/images/doctor.jpg"
            className="img-fluid rounded-start"
            alt={name}
            style={{ width: "300px", borderRadius: "5px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">
              Website:{" "}
              <a href="#" className="link">
                {website}
              </a>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">ID: {id}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}