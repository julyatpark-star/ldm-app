import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login.jsx';
import Welcome from './screens/onboarding/Welcome.jsx';
import Profile from './screens/onboarding/Profile.jsx';
import AboutYou from './screens/onboarding/AboutYou.jsx';
import MeetYourTeam from './screens/onboarding/MeetYourTeam.jsx';
import Ready from './screens/onboarding/Ready.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Navigate to="/onboarding/welcome" replace />} />
      <Route path="/onboarding/welcome" element={<Welcome />} />
      <Route path="/onboarding/profile" element={<Profile />} />
      <Route path="/onboarding/about-you" element={<AboutYou />} />
      <Route path="/onboarding/meet-your-team" element={<MeetYourTeam />} />
      <Route path="/onboarding/ready" element={<Ready />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
