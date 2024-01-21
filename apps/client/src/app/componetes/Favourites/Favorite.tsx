import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GET_FAVORITE } from '../../graphqlClinet/mutatitn/Mutatitn';
import { useMutation } from '@apollo/client';
import majorCities, { City } from '../../data/city';

export default function Favorite(cardId: any) {
  // const [cards, setCards] = useState([]);

  const [getFavorite, { data, loading, error }] = useMutation(GET_FAVORITE);
  const [selectedCity, setSelectedCity] = useState<City>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getFavorite({
        variables: {
          input: {
            email: localStorage.getItem('emailUser'),
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching favorite data:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data &&
        data.getFavorite &&
        data.getFavorite.strings.map((cityName: string, index: number) => (
          <div>
            <div
              key={index}
              className="relative flex flex-col mt-6 mr-4 text-gray-700 bg-blue shadow-md bg-clip-border rounded-xl p-9"
            >
              <img
                src="https://www.shvoong.co.il/wp-content/uploads/2022/01/shutterstock_1124541077.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />

              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {cityName}
                </h5>
                <Link
                  to="/Map"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Back To Map
                </Link>
                
                <button
                  type="button"
                  // onClick={}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
