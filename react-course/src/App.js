import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
 
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
 
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meet" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
  );
};
 
export default App;