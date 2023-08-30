import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <>
      <Nav style={{ margin: "20px" }}>
        <NavItem>
          <NavLink>
            <Link to="/">
              <img
                width={150}
                src="https://cdnlogo.com/logos/m/2/my-recipes.svg"
                alt="logo"
              />
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/meals">MEALS</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/instructions">DESCRIPTION OF THE DISH</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/login">
              <Button color="secondary">LOG IN</Button>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
