import React from 'react';

const ClothesThatFit: React.FC<{
  gender: string;
  clothingType: string;
  color: string;
  clothingOption: string;
}> = ({ gender, clothingType, color, clothingOption }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Clothes That Fit</h1>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Your Selection:</h2>
        <p>
          Gender: {gender}, Type: {clothingType}, Color: {color}, Option:{' '}
          {clothingOption}
        </p>
        <p>We did not find suitable clothes for you</p>
      </div>
    </div>
  );
};

export default ClothesThatFit;