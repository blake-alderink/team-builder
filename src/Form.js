import React, { useState } from "react";

function Form(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    props.submitHandler(formValues);
  };

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input name="name" onChange={onChange} value={formValues.name} />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={formValues.email}
          />
        </label>
        <label>
          Role:
          <select name="role" onChange={onChange} value={formValues.role}>
            <option value="engineer">Engineer</option>
            <option value="designer">Designer</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
