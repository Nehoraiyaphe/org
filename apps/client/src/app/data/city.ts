export type City = {
  name: string;
  latitude: number;
  longitude: number;
  weather?: string;
  temp?: string;
  feels_like?:number;
};

const majorCities: City[] = [
  { name: 'New York', latitude: 40.7128, longitude: -74.006 },
  { name: 'London', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
  { name: 'Shanghai', latitude: 31.2304, longitude: 121.4737 },
  { name: 'Moscow', latitude: 55.7558, longitude: 37.6173 },
  { name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
  { name: 'Cairo', latitude: 30.0444, longitude: 31.2357 },
  { name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  { name: 'Beijing', latitude: 39.9042, longitude: 116.4074 },
  { name: 'Mumbai', latitude: 19.076, longitude: 72.8777 },
  { name: 'Istanbul', latitude: 41.0082, longitude: 28.9784 },
  { name: 'Lagos', latitude: 6.5244, longitude: 3.3792 },
  { name: 'Kinshasa', latitude: -4.4419, longitude: 15.2663 },
  { name: 'Lima', latitude: -12.0464, longitude: -77.0428 },
  { name: 'Bangkok', latitude: 13.7563, longitude: 100.5018 },
  { name: 'Bogotá', latitude: 4.71, longitude: -74.0721 },
  { name: 'Johannesburg', latitude: -26.2041, longitude: 28.0473 },
  { name: 'Tehran', latitude: 35.6895, longitude: 51.389 },
  { name: 'Nairobi', latitude: -1.286389, longitude: 36.817223 },
  { name: 'Berlin', latitude: 52.52, longitude: 13.405 },
  { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
  { name: 'Rome', latitude: 41.9028, longitude: 12.4964 },
  { name: 'Buenos Aires', latitude: -34.6118, longitude: -58.4173 },
  { name: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
  { name: 'Toronto', latitude: 43.6532, longitude: -79.3832 },
  { name: 'Melbourne', latitude: -37.8136, longitude: 144.9631 },
  { name: 'Munich', latitude: 48.8566, longitude: 2.3522 },
  { name: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
  { name: 'Warsaw', latitude: 52.2297, longitude: 21.0122 },
  { name: 'Seoul', latitude: 37.5665, longitude: 126.978 },
  { name: 'Hong Kong', latitude: 22.3193, longitude: 114.1694 },
  { name: 'Dallas', latitude: 32.7767, longitude: -96.797 },
  { name: 'Cape Town', latitude: -33.9258, longitude: 18.4232 },
  { name: 'Montreal', latitude: 45.5017, longitude: -73.5673 },
  { name: 'Jerusalem', latitude: 31.7683, longitude: 35.2137 },
  { name: 'Tel Aviv', latitude: 32.0853, longitude: 34.7818 },
  { name: 'Haifa', latitude: 32.7940, longitude: 34.9896 },
  { name: 'Rishon LeZion', latitude: 31.9710, longitude: 34.7897 },
  { name: 'Osaka', latitude: 34.6937, longitude: 135.5022 },
  { name: 'Minsk', latitude: 53.9045, longitude: 27.5615 },
  { name: 'Lisbon', latitude: 38.7223, longitude: -9.1393 },
  { name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041 },
  { name: 'Houston', latitude: 29.7604, longitude: -95.3698 },
  { name: 'Phoenix', latitude: 33.4484, longitude: -112.074 },
  { name: 'Philadelphia', latitude: 39.9526, longitude: -75.1652 },
  { name: 'Hanoi', latitude: 21.0285, longitude: 105.8542 },
];

export default majorCities;
