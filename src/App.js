import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Dashboard from './components/Dashboard';
import ManageItem from './components/ManageItem';
import ApprovedPurchased from './components/ApprovedPurchased';
import Request from './components/Request';
import Reports from './components/Reports';
import Scanner from './components/Scanner';
import Settings from './components/Settings';
import SignIn from './components/SignIn'; // Correct import for default export
import SignUp from './components/SignUp'; // Correct import for default export
import ForgotPassword from './components/ForgotPassword'; // Correct import for default export

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-item" element={<ManageItem />} />
            <Route path="/approved-purchased" element={<ApprovedPurchased />} />
            <Route path="/request" element={<Request />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
