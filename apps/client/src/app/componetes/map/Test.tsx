import { Line } from 'react-chartjs-2';

const YourComponent = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'hsl(252, 82.9%, 67.8%)',
        borderColor: 'hsl(252, 82.9%, 67.8%)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const options = {}; // You can customize options here

  // const selectedCity = /* your logic for selected city */
  // const majorCities = /* your list of major cities */

  // const handelSelectCity = /* your logic for handling city selection */
  return (
    <div className="flex flex-col md:flex-row">
      <div className="map w-full md:w-1/2"></div>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="flex items-center justify-end mb-4">
          {/* ... (your city selection dropdown) */}
        </div>
      </div>
      {/* Line Chart */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="py-3 px-5 bg-gray-50">Line chart</div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default YourComponent;
