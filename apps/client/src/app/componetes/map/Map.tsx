import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { useEffect, useState } from 'react';
import majorCities, { City } from '../../data/city';
import Point from 'ol/geom/Point';
import { RMap, ROSM, RLayerVector, RFeature, RStyle } from 'rlayers';
import { RLayerTileWebGL, ROSMWebGL, RControl } from 'rlayers';
import { Navigate, useNavigate } from 'react-router-dom';
import locationIcon from './location.svg';
import RLayerStadia from 'rlayers/layer/RLayerStadia';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [weatherData, setWeatherData] = useState<string[]>([]);
  const navigate = useNavigate();

  const FavouritesClick = async () => {
    navigate('/Favorite');
  };

  const API_KEY = 'c10279da29d184f8bcd89f84981669f9';

  const newApi = '35b62bee115f4b8982a9bd45679dd4f3';

  const fetchWeather = async (city: City) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}&units=metric`;
    try {
      const respons = await fetch(url);
      const data = await respons.json();
      const weatherDescription = data.weather[0].description;
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      setSelectedCity({
        ...city,
        weather: weatherDescription,
        temp: temp,
        feels_like: feelsLike,
      });
    } catch (error) {
      console.error('fail', error);
    }
  };

  const getDataFor7days = async (lat: any, lon: any, api: any) => {
    // debugger;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedEndDate = `${year}-${month}-${day}`;
    console.log(formattedEndDate);

    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 7);
    const formattedStartDate = formatDate(startDate);

    const weather = [];
    const url = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lon}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&key=35b62bee115f4b8982a9bd45679dd4f3`;
    try {
      let res = await fetch(url);
      let data1 = await res.json();

      setWeatherData(data1.data);
    } catch (error) {
      console.log(error);
    }
    function formatDate(date: any) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  };
  console.log(weatherData);

  const handelSelectCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // debugger
    const city = majorCities.find((c) => c.name === event.target.value);
    setSelectedCity(city);
    if (city) {
      fetchWeather(city);
    }
  };

  const isLogin = localStorage.getItem('isLogin');
  if (!isLogin) return <Navigate replace to={'/'} />;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="map w-full md:w-1/2">
        <div className="relative h-96 md:h-full">
          {selectedCity ? (
            <RMap
              key={selectedCity.name}
              width={'100%'}
              height={'229%'}
              initial={{
                center: fromLonLat([
                  selectedCity.longitude,
                  selectedCity.latitude,
                ]),
                zoom: 10,
              }}
            >
              <ROSM />

              <RLayerVector zIndex={10}>
                <RStyle.RStyle>
                  <RStyle.RIcon
                    scale={0.1}
                    src={locationIcon}
                    anchor={[0.5, 0.8]}
                  />
                </RStyle.RStyle>
                <RFeature
                  geometry={
                    new Point(
                      fromLonLat([
                        selectedCity.longitude,
                        selectedCity.latitude,
                      ])
                    )
                  }
                  onClick={() => {
                    getDataFor7days(
                      selectedCity.longitude,
                      selectedCity.latitude,
                      API_KEY
                    );
                  }}
                />
              </RLayerVector>
              <RControl.RLayers>
                <ROSMWebGL properties={{ label: 'OSM' }} />
                <RLayerTileWebGL
                  properties={{ label: 'OpenTopo' }}
                  url="https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
                <RLayerStadia
                  properties={{ label: 'Stadia Terrain Background' }}
                  layer="stamen_terrain_background"
                />
              </RControl.RLayers>
            </RMap>
          ) : (
            <RMap
              width={'100%'}
              height={'229%'}
              initial={{
                center: [0, 0],
                zoom: 1,
              }}
            >
              <ROSM />
              <RControl.RLayers>
                <ROSMWebGL properties={{ label: 'OSM' }} />
                <RLayerTileWebGL
                  properties={{ label: 'OpenTopo' }}
                  url="https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
                <RLayerStadia
                  properties={{ label: 'Stadia Terrain Background' }}
                  layer="stamen_terrain_background"
                />
              </RControl.RLayers>
            </RMap>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="flex items-center justify-end mb-4">
          <button
            type="button"
            onClick={FavouritesClick}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-100 border text-black hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-9"
          >
            Favourites
          </button>

          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-100 border text-black hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-9"
          >
            choice a city
          </button>

          <select
            onChange={handelSelectCity}
            value={selectedCity?.name}
            className="p-2 rounded-md bg-blue-100 border border-blue-300"
          >
            <option value="" className="text-right">
              Select a City
            </option>

            {majorCities.map((city: City, index: number) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="temp bg-blue-100 border border-blue-300 rounded-md p-4">
          <h3 className="mt-1 text-right text-1xl font-bold leading-9 tracking-tight text-gray-600">
            {' '}
            You should click on the icon*{' '}
          </h3>
          <h2 className="text-2xl font-bold">City: {selectedCity?.name}</h2>
          <p className="text-lg">Weather: {selectedCity?.weather}</p>
          <p className="text-lg">Temp: {selectedCity?.temp}</p>
          <p className="text-lg">Feels Like: {selectedCity?.feels_like}</p>
        </div>
        {weatherData.map((data: any, index) => (
          <div
            className="temp bg-blue-100 border border-blue-300 rounded-md p-2"
            key={index}
          >
            <p className="text-lg">Temp: {data?.temp}</p>
            <p className="text-lg">Date: {data?.datetime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
