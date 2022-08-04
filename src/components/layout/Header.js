import { NavLink } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import useAuth from "../../context/auth/hook";
// styles
import styles from "./Header.module.css";

const navItems = [
  // { name: "Home", link: "/" },
  { name: "Login", link: "/login" },
  { name: "Register", link: "/register" },
  { name: "Logout", link: "#" },
];

const Header = () => {
  const { logout, user } = useAuth();
  const activeStyle = {
    color: "#ffff00",
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <div style={{ textAlign: "center", color: "yellow" }}>
            <IoGameController
              className={styles.logo}
              style={{ margin: "auto" }}
            />
            <h2>WORLD GAMING</h2>
          </div>
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Popular
              </NavLink>
            </li>

            {navItems.map((item) => {
              if (user) {
                if (item.name !== "Login" && item.name !== "Register")
                  return (
                    <li>
                      <NavLink
                        to="favorites"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Favorites
                      </NavLink>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <NavLink
                        style={{
                          margin: 5,
                        }}
                        key={item}
                        to={item.link}
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-inactive"
                        }
                        onClick={() => {
                          if (item.name === "Logout") {
                            logout();
                          }
                        }}
                      >
                        {item.name} &nbsp;&nbsp;&nbsp;&nbsp; Hallo{" "}
                        {user.email.split("@gmail.com")}
                      </NavLink>
                    </li>
                  );
              } else {
                if (item.name !== "Logout")
                  return (
                    <li>
                      <NavLink
                        style={{
                          margin: 5,
                        }}
                        key={item}
                        to={item.link}
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-inactive"
                        }
                        onClick={() => {
                          if (item.name === "Logout") {
                            logout();
                          }
                        }}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
              }

              return null;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
