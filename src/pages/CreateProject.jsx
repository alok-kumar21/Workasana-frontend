import { useState } from "react";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add Project");
      }

      setFormData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center text-primary">Create Project</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <label className="form-label" htmlFor="projectname">
            Name
          </label>
          <br />
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="projectname"
            placeholder="Enter name"
            className="form-control"
            required={true}
          />
          <br />
          <label
            className="form-label
          "
            htmlFor="description"
          >
            Description
          </label>
          <div className="form-floating">
            <textarea
              value={formData.description}
              onChange={handleChange}
              name="description"
              className="form-control"
              placeholder="Description"
              id="projectdescription"
              style={{ height: "100px" }}
              required={true}
            ></textarea>
            <label htmlFor="projectdescription">Description</label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
