import Menu from "./Menu";
import useFetch from "./useFetch";

const TaskList = () => {
  const { data: taskData } = useFetch("http://localhost:5001/tasks");
  const { data: userData } = useFetch("http://localhost:5001/users");
  console.log(userData);

  return (
    <section className="row">
      {/* Sidebar */}
      <section className="col-12 col-md-2 ps-4 pt-5 bg-light">
        <Menu />
      </section>

      {/* Main content */}
      <section className="col-12 col-md-10 ps-4 pt-5">
        <form action="">
          <select className="form-select" name="" id="">
            <option value="#">-- Select Owner --</option>
            {userData?.map((user) => (
              <option value={user.name}>{user.name}</option>
            ))}
          </select>
        </form>
      </section>
    </section>
  );
};

export default TaskList;
