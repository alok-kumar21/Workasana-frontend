import Menu from "./Menu";

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useFetch from "./useFetch";

const Dashboard = () => {
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();

  const { data: tagsData } = useFetch("http://localhost:5001/tags");
  console.log(tagsData);

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
        <button className="btn btn-light shadow me-3">+ Add Tag</button>
        <Link
          to="/taskfrom"
          className="btn btn-light  mt-1 me-3 shadow border-2"
        >
          + Add Task
        </Link>
        <button
          className="btn btn-primary float-end mt-1 shadow"
          onClick={logout}
        >
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
                className="form-control form-control-sm w-25"
                placeholder="Search"
              />
              <span className="input-group-text bg-light" id="addon-wrapping">
                <i className="bi bi-search "></i>
              </span>
            </div>
          </section>
          {/* categries */}
          <section className="row">
            {tagsData?.map((tag) => (
              <section className="col-12 col-md-3 ms-2 mt-5">
                <div className=" rounded card">
                  <div className="bg-light card-header">
                    <p className=" p-2">{tag.name}</p>
                  </div>
                  <div className="card-body"></div>
                </div>
              </section>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
