import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { useEffect, useState } from 'react';
import majorCities, { City } from '../../data/city';
import Point from 'ol/geom/Point';
import { RMap, ROSM, RLayerVector, RFeature, RStyle } from 'rlayers';
import { useNavigate } from 'react-router-dom';
import locationIcon from './location.svg';


export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<string[]>([]);

  const navigate = useNavigate();

  const API_KEY = 'c10279da29d184f8bcd89f84981669f9';

  const fecthWeather = async (city: City) => {
    // debugger;
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
    debugger;

    const wheater = [];
    let url = `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=81JnAbamqn6nGT7FwPWCPkeYPcyT4hCJ`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const weatherDescription = data.weather[0].description;
      const time = data.timelines.daily;
      data.map((da: any) => {
        console.log('data', da.timelines);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handelSelectCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = majorCities.find((c) => c.name === event.target.value);
    setSelectedCity(city ?? null);

    if (city) {
      fecthWeather(city);
    }
  };

  useEffect(() => {
    getDataFor7days(selectedCity?.longitude, selectedCity?.latitude, API_KEY);
  }, [selectedCity?.longitude, selectedCity?.latitude]);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin !== 'true') navigate('/');
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="map w-full md:w-1/2">
        <div className="relative h-96 md:h-full">
          {selectedCity ? (
            <RMap
              key={selectedCity.name}
              width={'100%'}
              height={'268%'}
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
                  // onClick={(wheater)}
                />
              </RLayerVector>
            </RMap>
          ) : (
            <RMap
              width={'100%'}
              height={'268%'}
              initial={{
                center: [0, 0],
                zoom: 1,
              }}
            >
              <ROSM />
            </RMap>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="flex items-center justify-end mb-4">
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
          <h2 className="text-2xl font-bold">City: {selectedCity?.name}</h2>
          <p className="text-lg">Weather: {selectedCity?.weather}</p>
          <p className="text-lg">Temp: {selectedCity?.temp}</p>
          <p className="text-lg">Feels Like: {selectedCity?.feels_like}</p>
        </div>
      </div>
    </div>
  );
}
