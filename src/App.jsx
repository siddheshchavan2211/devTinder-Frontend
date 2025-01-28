import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Store from "./utils/Store";
import { Provider } from "react-redux";
import Profile from "./components/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Friends from "./components/Friends";
import PendingRequests from "./components/PendingRequests";
import Footer from "./components/Footer";
import BusinessPolicy from "./components/BusinessPolicy";
import Membership from "./components/Membership";
function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/feed"
                element={
                  <ProtectedRoutes>
                    <Feed />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoutes>
                    <Profile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/friends"
                element={
                  <ProtectedRoutes>
                    <Friends />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/pendingrequests"
                element={
                  <ProtectedRoutes>
                    <PendingRequests />
                  </ProtectedRoutes>
                }
              />
              <Route path="/subscription" element={<Membership />} />
            </Route>
            <Route path="/footer" element={<Footer />} />
            <Route path="/businesspolicy" element={<BusinessPolicy />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
