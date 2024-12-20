import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");

  const [allusers, setAllUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArr = [...allusers, { name, company, number }];
    setAllUsers(newArr);

    setName("");
    setCompany("");
    setNumber("");

    console.log(name, company, number);
  };

  const removeHandler = (index) => {
    const copyusers = [...allusers];
    copyusers.splice(index, 1);
    setAllUsers(copyusers);
  };

  return (
    <div className="p-2 border-black flex items-center justify-between  gap-10">
      <form
        className="px-10 py-6 bg-white rounded-lg border-2 border-gray-300 shadow-xl flex flex-col gap-6 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Contact
        </h2>

        <div className="w-full">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="w-full">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            type="text"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your company name"
          />
        </div>

        <div className="w-full">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="number"
          >
            Phone Number
          </label>
          <input
            id="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            type="number"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your phone number"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
        >
          Add Contact
        </button>
      </form>

      <div className="w-full h-full flex items-center flex-wrap justify-center gap-10">
        {allusers.map((elem, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-sm h-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300"
            >
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Name: {elem.name}
              </h1>
              <h2 className="text-lg font-medium text-gray-700 mb-1">
                Company: {elem.company}
              </h2>
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Number: {elem.number}
              </h3>
              <button
                onClick={() => removeHandler(index)}
                className=" bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove Contact
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
