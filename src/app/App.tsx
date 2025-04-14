import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  ChannelsPage,
  ChatsPage,
  FeedPage,
  NotificationsPage,
  SavedPage,
  VideoPage,
} from '../pages';

import { GlobalLayout } from './layouts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<FeedPage />} />
        <Route path="channels" element={<ChannelsPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="saved" element={<SavedPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="chats" element={<ChatsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
