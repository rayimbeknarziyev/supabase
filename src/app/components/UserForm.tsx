"use client";

import { useState, Dispatch, SetStateAction } from "react";

// 🔹 props tipi
interface UserFormProps {
  setIsFetching: Dispatch<SetStateAction<boolean>>;
  isFetching: boolean;
}

export default function UserForm({ setIsFetching, isFetching }: UserFormProps) {
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isStudent, setIsStudent] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = {
      fullName,
      age,
      isStudent,
    };

    fetch("http://localhost:8080/users", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      method: "POST",
    });

    setFullName("");
    setAge(0);
    setIsStudent(false);
    setIsFetching(!isFetching);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-3 mt-5 w-25 mx-auto">
        <input
          type="text"
          placeholder="fullname..."
          className="form-control mb-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="number"
          placeholder="age..."
          className="form-control mb-2"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <div className="d-flex items-center justify-center gap-3 mb-3">
          <label className="form-check-label" htmlFor="student">
            IsStudent:
            <input
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
              type="checkbox"
              className="form-check-input"
            />
          </label>
        </div>
        <button className="btn btn-success w-100">Save</button>
      </form>
    </div>
  );
}
