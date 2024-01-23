
// import { City } from '../../data/city'



// const API_KEY = 'c10279da29d184f8bcd89f84981669f9';

// export default async function useHooks(city:City) {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}&units=metric`;
//         try {
//           const respons = await fetch(url);
//           const data = await respons.json();
//           const temp = data.main.temp;
//         //   const weatherDescription = data.weather[0].description;
//         //   const feelsLike = data.main.feels_like;
//           return temp
//         } catch (error) {
//           console.error('fail', error);
//         }
//       };
