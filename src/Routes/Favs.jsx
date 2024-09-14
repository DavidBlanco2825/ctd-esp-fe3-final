import { useMemo } from 'react';
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useCharStates();

  const renderedFavs = useMemo(() => {
    return state.favs.map((dentist) => (
      <Card key={dentist.id} dentist={dentist} />
    ));
  }, [state.favs]);

  return (
    <>
      <header>
        <h1>Your Favorite Dentists</h1>
      </header>
      <div className="card-container">
        {state.favs.length > 0 ? renderedFavs : <p>No favorite dentists added yet.</p>}
      </div>
    </>
  );
};

export default Favs;