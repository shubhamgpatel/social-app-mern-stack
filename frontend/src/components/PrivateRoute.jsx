// src/components/PrivateRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoutes = ({ children }) => {
  // const auth = localStorage.getItem('token'); // or use your auth context/state
  // const user = useSelector((state) => state.auth.user);
  // return user ? children : <Navigate to="/" />;
// };
//   ✔️ Simpler, easier for small-to-medium apps or early stages.
//   ❌ Doesn't respond dynamically if the token is removed unless you force a reload or use useEffect.
//   ⚠️ Still fine, but less flexible than Redux/Context for state reactivity.

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
    return user ? <Outlet /> : <Navigate to="/login" />;
  };
//✔️ Used when you're managing auth state in Redux (like state.auth.user or state.auth.token).
//✅ Industry Standard when apps are built with Redux (used in large-scale apps).
//🔒 Automatically updates when the Redux state changes (great for dynamic UIs).

export default PrivateRoute;
