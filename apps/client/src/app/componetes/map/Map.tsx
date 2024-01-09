import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { useState } from 'react';
import majorCities, { City } from '../../data/city';
import Point from 'ol/geom/Point';
import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from 'rlayers';


export default function Home() {

  const [selectedCity, setSelectedCity] = useState<City | null>(null);


  console.log([selectedCity?.latitude, selectedCity?.longitude]);

  const fecthWeather = async (city: City) => {
    // debugger;
    const API_KEY = 'c10279da29d184f8bcd89f84981669f9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`;
    try {
      const respons = await fetch(url);
      const data = await respons.json();
      const weatherDescription = data.weather[0].description;
      const temp=data.main.temp
      setSelectedCity({ ...city, weather: weatherDescription, temp:temp });
    } catch (error) {
      console.error('fail',error);
    }
  };
  const handelSelectCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = majorCities.find((c) => c.name === event.target.value);
    setSelectedCity(city ?? null);
    if(city){
      fecthWeather(city)

    }
  };
  return (
    <div className="map">
      <div>
        <select onChange={handelSelectCity} value={selectedCity?.name}>
          <option value=""> Select a City</option>
          {majorCities.map((city: City, index: number) => {
            return (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>
      {selectedCity ? (
        <RMap
          key={selectedCity.name} // Change key to force remount
          width={700}
          height={600}
          initial={{
            center: fromLonLat([selectedCity.longitude, selectedCity.latitude]),
            zoom: 10,
          }}
        >
          <ROSM />
          <RLayerVector>
            <RStyle.RStyle>
              <RStyle.RCircle
                radius={10}
                // fill={new RStyle.RFill({ color: 'blue' })}
              />
            </RStyle.RStyle>
            <RFeature
              geometry={
                new Point([selectedCity.longitude, selectedCity.latitude])
              }
            />
          </RLayerVector>
        </RMap>
      ) : (
        <RMap
          width={700}
          height={600}
          initial={{
            center: [0, 0],
            zoom: 1,
          }}
        >
          <ROSM />
        </RMap>
      )}
      <div>
        <h3>{selectedCity?.name}</h3>
        <p>{selectedCity?.weather}</p>
        <p>{selectedCity?.temp}</p>
      </div>
    </div>
  );
}
