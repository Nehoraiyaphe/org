import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MatchingClothes from '../pages/MatchingClothes/MatchingClothes';
import ClothesThatFit from '../pages/ClothesThatFit/ClothesThatFit';

const RouterDom = () => {
  const NotFoundPage = () => <div>404 Not Found</div>;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/matchingClothes" element={<MatchingClothes />} />
      <Route
        path="/ClothesThatFit"
        element={
          <ClothesThatFit
            gender={''}
            clothingType={''}
            color={''}
            clothingOption={''}
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterDom;