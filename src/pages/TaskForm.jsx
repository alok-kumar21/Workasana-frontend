import { useState } from "react";

import useFetch from "./useFetch";

const TaskForm = () => {
  const { data: projectData } = useFetch("http://localhost:5001/projects");
  const { data: teamsData } = useFetch("http://localhost:5001/teams");
  const { data: tagsData } = useFetch("http://localhost:5001/tags");
  console.log(tagsData);

  return (
    <section className="mb-5">
      <div className="container">
        <h1 className="text-center text-primary mt-5">Create Task</h1>
        <form action="" className="mt-5">
          <label className="form-label" htmlFor="">
            Name
          </label>
          <br />
          <input className="form-control" type="text" placeholder="Name" />
          <br />
          <label className="form-label" htmlFor="projects">
            Project Name
          </label>
          <br />
          <select className="form-select" name="projects" id="">
            <option value="">---Select Project---</option>
            {projectData?.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
          <br />
          <label className="form-label" htmlFor="">
            Owners
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Owners---</option>
            <option value="">member 1</option>
            <option value="">member 2</option>
            <option value="">member 3</option>
          </select>
          <br />
          <label className="form-label" htmlFor="">
            Team
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Team---</option>
            {teamsData?.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </select>

          <br />
          <label className="form-label" htmlFor="">
            Tags
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Tags---</option>
            {tagsData?.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="" className="form-label">
            Time to Complete
          </label>
          <br />
          <input
            className="form-control"
            type="Number"
            placeholder="Time to Complete"
          />
          <br />
          <label htmlFor="" className="form-label">
            Status
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Status---</option>
            <option value="">To DO</option>
            <option value="">In Progress</option>
            <option value="">Completed</option>
            <option value="">Blocked</option>
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
