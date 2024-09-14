import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useCharStates } from "../Components/utils/global.context";
import { useMemo } from 'react';
import { toast } from "react-toastify";

const Card = ({ dentist }) => {
  const { state, dispatch } = useCharStates();
  const { name, username, id } = dentist;

  const isFav = useMemo(() => state.favs.some((fav) => fav.id === id), [state.favs, id]);

  const addFav = () => {
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: dentist });
      toast.error(`Dentist ${name} removed from favorites!`);
    } else {
      dispatch({ type: "ADD_FAV", payload: dentist });
      toast.success(`Dentist ${name} added to favorites!`);
    }
  };

  return (
    <div className="card">
      <img
        src="/images/doctor.jpg"
        alt="dentist"
        style={{ width: "300px", borderRadius: "5px" }}
      />
      <Link to={routes.detail + id}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button
        onClick={addFav}
        className="favButton"
        style={{
          backgroundColor: isFav ? '#dc3545' : '#ffc107',
          color: isFav ? 'white' : 'black'
        }}
      >
        {isFav ? "Remove from" : "Add to"} Favs
      </button>
    </div>
  );
};

export default Card;
