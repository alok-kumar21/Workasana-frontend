import Menu from "./Menu";
import useFetch from "./useFetch";

const TaskList = () => {
  const { data: taskData } = useFetch("http://localhost:5001/tasks");
  const { data: projectData } = useFetch("http://localhost:5001/projects");
  console.log(taskData);

  return (
    <section className="row">
      {/* Sidebar */}
      <section className="col-12 col-md-2 ps-4 pt-5 bg-light">
        <Menu />
      </section>

      {/* Main content */}
      <section className="col-12 col-md-10 ps-4 pt-5">
        {/* Table */}
        <div className="table-responsive mt-3">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">
                  <select
                    className="form-select bg-dark text-light"
                    name=""
                    id=""
                  >
                    <option value="">Project Name</option>
                    {projectData?.map((project) => (
                      <option key={project._id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col">
                  <select
                    className="form-select bg-dark text-light"
                    name=""
                    id=""
                  >
                    <option value="">Owner</option>
                    <option value="">user 1</option>
                    <option value="">user 2</option>
                    <option value="">user 3</option>
                  </select>
                </th>

                <th scope="col">
                  <select
                    className="form-select bg-dark text-light"
                    name=""
                    id=""
                  >
                    <option value="">Team</option>
                  </select>
                </th>

                <th scope="col">
                  <select
                    className="form-select bg-dark text-light"
                    name=""
                    id=""
                  >
                    <option value="">Tags</option>
                  </select>
                </th>

                <th scope="col">
                  <select
                    className="form-select bg-dark text-light"
                    name=""
                    id=""
                  >
                    <option value="">status</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {taskData?.map((task) => (
                <tr key={task._id}>
                  <td>{task.name}</td>
                  <td>{task.owners.join(",")}</td>
                  <td>{task.team}</td>
                  <td>{task.tags.join(",")}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
              {/* <tr>
                <td>Mobile App</td>
                <td>Jacob Thornton</td>
                <td>Design</td>
                <td>UX, Review</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>API Integration</td>
                <td>John Doe</td>
                <td>Backend</td>
                <td>API, Critical</td>
                <td>Completed</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default TaskList;
