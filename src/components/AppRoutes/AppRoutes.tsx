import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import ScrollToTop from '../../shared/ScrollToTop/ScrollToTop';
import Remixes from '../Remixes/Remixes';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/remixes" element={<Layout />}>
            <Route index element={<Remixes />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default AppRoutes;
