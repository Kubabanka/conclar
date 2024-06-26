import { NavLink } from "react-router-dom";
import configData from "../config.json";

const Navigation = () => {
  const extraLinks = [];
  if ("EXTRA" in configData.NAVIGATION) {
    for (let link of configData.NAVIGATION.EXTRA) {
      extraLinks.push(
        <li key={link.URL}>
          <a href={link.URL}>{link.LABEL}</a>
        </li>
      );
    }
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">{configData.NAVIGATION.PROGRAM}</NavLink>
        </li>
        <li>
          <NavLink to="/myschedule">{configData.NAVIGATION.MYSCHEDULE}</NavLink>
        </li>
        <li>
          <NavLink to="/info">{configData.NAVIGATION.INFO}</NavLink>
        </li>
        <li>
          <NavLink to="/settings">{configData.NAVIGATION.SETTINGS}</NavLink>
        </li>
        {extraLinks}
      </ul>
    </nav>
  );
};

export default Navigation;
