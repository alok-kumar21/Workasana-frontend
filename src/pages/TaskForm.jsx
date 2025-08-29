import { useState } from "react";

const TaskForm = () => {
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
          <label className="form-label" htmlFor="">
            Project Name
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Project---</option>
            <option value="">Project 1</option>
            <option value="">Project 2</option>
            <option value="">Project 2</option>
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
            <option value=""> Marketing</option>
            <option value="">Development</option>
            <option value="">Finance</option>
          </select>

          <br />
          <label className="form-label" htmlFor="">
            Tags
          </label>
          <br />
          <select className="form-select" name="" id="">
            <option value="">---Select Team---</option>
            <option value=""> Urgent</option>
            <option value="">Bug</option>
            <option value="">Error</option>
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
