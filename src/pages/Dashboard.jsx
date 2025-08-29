import Menu from "./Menu";

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5001/tasks", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) {
        setTasks(data);
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="float-end mt-5 me-5">
        <button className="btn btn-primary float-end mt-1" onClick={logout}>
          Logout
        </button>
      </div>
      {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}

      <section className="row">
        <section className="col-12 col-md-2 ps-4  pt-5 bg-light">
          <Menu />
        </section>
        <section className="col-12 col-md-10 ps-5  mt-5">
          {/* search box */}
          <section id="search" className="container mt-1">
            <div className="input-group flex-nowrap">
              <input
                type="email"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text bg-light" id="addon-wrapping">
                <i className="bi bi-search "></i>
              </span>
            </div>
          </section>
          {/* projects */}
          <section id="project" className="container">
            <div className="d-flex mt-4">
              <h2>Project</h2>
              <select className=" form-select-sm bg-light ms-3" name="" id="">
                <option value="#">Filter</option>
                <option value="In Progress">In progress</option>
                <option value="In Progress">Completed</option>
              </select>

              <Link to="/createproject" className="btn btn-primary btn-sm ms-3">
                + New Pproject
              </Link>
            </div>
            <div className="project-list ">
              <div className="row">
                <div className="col-md-4 mt-4">
                  <div className="card bg-light">
                    <div className="ms-3 mt-3">
                      <span className="badge  text-bg-warning">Warning</span>
                    </div>
                    <div className="card-body border-none">
                      <h4>Create Moodboard</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae repellendus quia optio dicta provident
                        fugiat dolore accusantium! Vero, quas dolorum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card bg-light">
                    <div className="ms-3 mt-3">
                      <span className="badge  text-bg-success">Completed</span>
                    </div>
                    <div className="card-body border-none">
                      <h4>Create Moodboard</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae repellendus quia optio dicta provident
                        fugiat dolore accusantium! Vero, quas dolorum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* tasks */}
          <section id="task " className="mt-5 container">
            <div className="d-flex mt-4">
              <h2>My Tasks</h2>
              <select className="form-select-sm bg-light ms-3" name="" id="">
                <option value="#">Filter</option>
                <option value="In Progress">In progress</option>
                <option value="In Progress">Completed</option>
              </select>
              <Link to="/taskfrom" className="btn btn-primary ms-3">
                + New Task
              </Link>
            </div>
            <div className="task-list ">
              <div className="row">
                <div className="col-md-4 mt-4">
                  <div className="card bg-light">
                    <div className="ms-3 mt-3">
                      <span className="badge  text-bg-warning">Warning</span>
                    </div>
                    <div className="card-body border-none">
                      <h4>Create Moodboard</h4>
                      <p>Due on: 20th Dec 2024</p>
                      <img
                        style={{ width: "10%" }}
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card bg-light">
                    <div className="ms-3 mt-3">
                      <span className="badge  text-bg-success">Completed</span>
                    </div>
                    <div className="card-body border-none">
                      <h4>Create Moodboard</h4>
                      <p>Due on: 20th Dec 2024</p>
                      <img
                        style={{ width: "10%" }}
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
