import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointments from "./Pages/Appointments/Appointments";
// import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Loading from "./Pages/Shared/Loading";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Pages/Shared/ScrollToTop";
import Testimonials from "./Pages/Home/Testimonial/Testimonials";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./hooks/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/appointments"
            element={
              <RequireAuth>
                <Appointments />
              </RequireAuth>
            }
          ></Route>
          <Route path="/reviews" element={<Testimonials />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyAppointment />} />
            <Route path="myreview" element={<MyReview />} />
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
            <Route
              path="add-doctor"
              element={
                <RequireAdmin>
                  <AddDoctor />
                </RequireAdmin>
              }
            />
            <Route
              path="manage-doctors"
              element={
                <RequireAdmin>
                  <ManageDoctors />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="/loading" element={<Loading />}></Route>
        </Routes>
        <Footer />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
