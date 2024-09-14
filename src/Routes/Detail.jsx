import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../Components/DetailsCard';

const Detail = () => {
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const fetchDentist = useCallback(async () => {
    try {
      const res = await axios(url);
      setDentist(res.data);
    } catch (error) {
      console.error('Error fetching dentist data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDentist();
  }, [fetchDentist]);

  return (
    <>
      <h1>Dentist Details</h1>
      {loading ? <p>Loading...</p> : dentist ? <DetailsCard dentist={dentist} /> : <p>No dentist data available.</p>}
    </>
  )
}

export default Detail;