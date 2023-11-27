import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import Accounts from '../pages/accounts/accounts';
import Analytics from '../pages/analytics/analytics';
import Files from '../pages/files/files';
import Inbox from '../pages/inbox/inbox';
import Schedule from '../pages/schedule/schedule';
import Search from '../pages/search/search';
import Setting from '../pages/setting/setting';


function Pagesrouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/files" element={<Files />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/search" element={<Search />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}


export default Pagesrouter;