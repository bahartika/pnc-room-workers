import React from "react";

const shifts = [
  { id: 1, label: "Shift 1 (00:00 - 08:00)", start: "00:00", end: "08:00" },
  { id: 2, label: "Shift 2 (08:00 - 16:00)", start: "08:00", end: "16:00" },
  { id: 3, label: "Shift 3 (16:00 - 24:00)", start: "16:00", end: "24:00" },
];

const Shift = ({ selectedShift, onChange }) => {
  return (
    <div className="mx-auto flex justify-center shadow-md">
      <select id="shift" name="shift" value={selectedShift} onChange={onChange} className="mt-2 px-3 py-2 rounded-md font-semibold text-blue-950 cursor-pointer hover:bg-slate-200 duration-200">
        {shifts.map((shift) => (
          <option key={shift.id} value={shift.id}>
            {shift.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Shift;
