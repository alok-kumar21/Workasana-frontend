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
          {/* categries */}
          <section className="row">
            {tagsData?.map((tag) => (
              <section className="col-12 col-md-2 ms-2 mt-5">
                <div className="card">
                  <div className="card-harder">
                    <h6 className=" p-2">{tag.name}</h6>
                  </div>
                  <div className="card-body">
                    <p>this is good</p>
                    <p>server is down</p>
                  </div>
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
