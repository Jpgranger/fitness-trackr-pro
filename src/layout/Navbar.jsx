import { useAuth } from "../auth/AuthContext";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ Use React Router for navigation

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activities">Activities</NavLink>

        {token ? (
          <a
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Log out
          </a>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
