import { useEffect, useState, useCallback, useMemo } from 'react';
import Card from '../Components/Card'
import axios from "axios"

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchDentists = useCallback(async () => {
    try {
      const res = await axios(url);
      setDentists(res.data);
    } catch (error) {
      setError('Error fetching dentists.');
      console.error("Error fetching dentists:", error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchDentists();
  }, [fetchDentists]);

  const renderedCards = useMemo(() => {
    return dentists.map((dentist) => (
      <Card key={dentist.id} dentist={dentist} />
    ));
  }, [dentists]);

  return (
    <main className="">
      <h1>Home</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="card-grid">
          {renderedCards}
        </div>
      )}
    </main>
  );
};

export default Home;