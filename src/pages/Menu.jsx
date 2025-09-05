import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="bg-light">
      <section>
        <div className="container">
          <Link to="/dashboard" className="text-primary navbar-brand">
            <h1>Workasana</h1>
          </Link>

          <ul className="list mt-4">
            <li className=" list-group-item mt-5">
              <Link className="nav-link fs-5">Dashboard</Link>
            </li>
            <li className="list-group-item mt-4">
              <Link className="nav-link fs-5">Project</Link>
            </li>
            <li className="list-group-item mt-4">
              <Link to="/taskList" className="nav-link fs-5">
                Tasks
              </Link>
            </li>
            <li className="list-group-item mt-4">
              <Link className="nav-link fs-5">Team</Link>
            </li>
            <li className="list-group-item mt-4">
              <Link className="nav-link fs-5">Reports</Link>
            </li>
            <li className="list-group-item mt-4">
              <Link className="nav-link fs-5">Setting</Link>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default Menu;
