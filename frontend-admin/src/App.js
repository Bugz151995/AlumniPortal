import { Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
// app layout
import AppLayout from './layout/AppLayout';
// app pages
import Login from './routes/login/Index';
import Signup from './routes/signup/Index';
import Home from './routes/home/Index';
import Announcements from './routes/announcements/Index';
import Careers from './routes/careers/Index';
import Events from './routes/events/Index';
import UserRequest from './routes/user_request/Index';
import UserList from './routes/user_list/Index';
import AdminRequest from './routes/admin_request/Index';
import AdminList from './routes/admin_list/Index';
import ActivityLog from './routes/activity_log/Index';
import ArchiveList from './routes/archive_list/Index';
import ForumThreads from './routes/forum_threads/Index';

/*
* Route Config
*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />}/>
      <Route path="home" element={<AppLayout element={<Home />} />}/>
      <Route path="announcements" element={<AppLayout element={<Announcements />} />}/>
      <Route path="careers" element={<AppLayout element={<Careers />} />}/>
      <Route path="events" element={<AppLayout element={<Events />} />}/>
      <Route path="user_request" element={<AppLayout element={<UserRequest />} />}/>
      <Route path="user_list" element={<AppLayout element={<UserList />} />}/>
      <Route path="admin_request" element={<AppLayout element={<AdminRequest />} />}/>
      <Route path="admin_list" element={<AppLayout element={<AdminList />} />}/>
      <Route path="activity_log" element={<AppLayout element={<ActivityLog />} />}/>
      <Route path="archive_list" element={<AppLayout element={<ArchiveList />} />}/>
      <Route path="forum_threads" element={<AppLayout element={<ForumThreads />} />}/>
      <Route path="*" element={<NoMatch />}/>
    </Routes>
  );
}

export default App;