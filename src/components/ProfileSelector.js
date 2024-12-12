import React, { useState } from "react";

const ProfileSelector = ({ role, people }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const handleChange = (event) => {
    const person = people.find((p) => p.id === parseInt(event.target.value));
    setSelectedPerson(person);
  };

  return (
    <div className="pt-6 px-6 max-w-md mx-auto bg-blue-800 rounded-xl shadow-md text-white">
      <h1 className="text-3xl font-bold text-center border-b-2 text-yellow-200">{role}</h1>
      <p className="my-1 text-lg text-center font-semibold">{selectedPerson.name}</p>
      <div className="flex flex-col items-center">
        <img src={selectedPerson.imageUrl} alt={selectedPerson.name} className="w-48 h-48 my-2 rounded-md object-cover object-top" />
        <select onChange={handleChange} className="my-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 p-1 transition-all duration-200 cursor-pointer text-blue-950 hover:bg-slate-300">
          {people.map((person) => (
            <option key={person.id} value={person.id} className="">
              {person.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProfileSelector;
