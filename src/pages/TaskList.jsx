import Menu from "./Menu";
import useFetch from "./useFetch";

const TaskList = () => {
  const { data: taskData } = useFetch("http://localhost:5001/tasks");
  const { data: userData } = useFetch("http://localhost:5001/users");

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
                    {taskData?.map((task) => (
                      <option key={task._id} value={task.project?.name}>
                        {task.project?.name}
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
                    {userData?.map((user) => (
                      <option key={user._id} value={user.name}>
                        {user.name}
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
                    <option>Select Team</option>
                    {taskData?.map((task) => (
                      <option key={task._id} value={task.team?.name}>
                        {task.team?.name}
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
                    <option value="#">Select Tags</option>
                    {taskData?.map((task) => (
                      <option key={task._id} value={task.tags.join(",")}>
                        {task.tags.join(",")}
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
                    <option value="">status</option>
                    {taskData?.map((task) => (
                      <option key={task._id} value={task.status}>
                        {task.status}
                      </option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {taskData?.map((task) => (
                <tr key={task._id}>
                  <td>{task.project?.name}</td>
                  <td>{task.owners?.map((user) => user.name + ", ")}</td>
                  <td>{task.team?.name}</td>
                  <td>{task.tags.join(",")}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default TaskList;
