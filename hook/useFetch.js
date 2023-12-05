
import { useState, useEffect } from 'react';
import axios from 'axios'; // axios import satırı düzeltildi

const useFetch = () => {
	
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://192.168.1.2:3000/api/products/');
      setData(response.data);
    } catch (err) { // Hata değişkenini "err" olarak değiştirildi
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };


  return { data, isLoading, error, refetch };
};

export default useFetch;
