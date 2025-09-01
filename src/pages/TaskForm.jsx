import { useState } from "react";
import useFetch from "./useFetch";

const TaskForm = () => {
  const [taskForm, setTaskForm] = useState({
    name: "",
    project: "",
    team: "",
    owners: [],
    tags: [],
    timeToComplete: "",
    status: "",
  });

  const { data: projectData } = useFetch("http://localhost:5001/projects");
  const { data: teamsData } = useFetch("http://localhost:5001/teams");
  const { data: tagsData } = useFetch("http://localhost:5001/tags");
  const { data: usersData } = useFetch("http://localhost:5001/users");

  const handleChange = (event) => {
    const { name, value, type, multiple, selectedOptions } = event.target;

    if (multiple) {
      // If it's a multi-select, get all selected values
      const values = Array.from(selectedOptions, (option) => option.value);
      setTaskForm((prev) => ({
        ...prev,
        [name]: values,
      }));
    } else if (type === "number") {
      setTaskForm((prev) => ({
        ...prev,
        [name]: value ? Number(value) : "",
      }));
    } else {
      setTaskForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskForm);

    // try {
    //   fetch("http://localhost:5001/tasks", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(taskForm),
    //   });
    // } catch (error) {
    //   console.log("Error:", error);
    // }

    setTaskForm({
      name: "",
      project: "",
      team: "",
      owners: [],
      tags: [],
      timeToComplete: "",
      status: "",
    });
  };

  return (
    <section className="mb-5">
      <div className="container">
        <h1 className="text-center text-primary mt-5">Create Task</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Name */}
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={taskForm.name}
            onChange={handleChange}
          />
          <br />

          {/* Project */}
          <label className="form-label" htmlFor="projects">
            Project Name
          </label>
          <select
            className="form-select"
            name="project"
            id="projects"
            value={taskForm.project}
            onChange={handleChange}
          >
            <option value="">---Select Project---</option>
            {projectData?.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
          <br />

          {/* Owners */}
          <label className="form-label" htmlFor="owner">
            Owners
          </label>
          <select
            multiple
            id="owner"
            name="owners"
            className="form-select"
            value={taskForm.owners}
            onChange={handleChange}
          >
            {usersData?.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          <br />

          {/* Team */}
          <label className="form-label" htmlFor="team">
            Team
          </label>
          <select
            id="team"
            className="form-select"
            name="team"
            value={taskForm.team}
            onChange={handleChange}
          >
            <option value="">---Select Team---</option>
            {teamsData?.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </select>
          <br />

          {/* Tags */}
          <label className="form-label" htmlFor="tags">
            Tags
          </label>
          <select
            multiple
            className="form-select"
            name="tags"
            id="tags"
            value={taskForm.tags}
            onChange={handleChange}
          >
            {tagsData?.map((tag) => (
              <option key={tag._id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
          <br />

          {/* Time */}
          <label htmlFor="timeToComplete" className="form-label">
            Time to Complete
          </label>
          <input
            name="timeToComplete"
            id="timeToComplete"
            className="form-control"
            type="number"
            placeholder="Time to Complete"
            value={taskForm.timeToComplete}
            onChange={handleChange}
          />
          <br />

          {/* Status */}
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            name="status"
            id="status"
            value={taskForm.status}
            onChange={handleChange}
          >
            <option value="">---Select Status---</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
          </select>
          <br />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
