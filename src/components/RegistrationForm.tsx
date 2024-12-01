import React from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    contact: "",
    organisation: "",
    delegates: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Registration Submitted! Thank you.");
  };

  return (
    <section className="max-w-4xl mx-auto p-6" id="register">
      <h2 className="text-2xl font-bold mb-4">Register for the Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact No."
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="organisation"
          placeholder="Organisation"
          value={formData.organisation}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="number"
          name="delegates"
          placeholder="No. of Delegates"
          value={formData.delegates}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
