import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
export default function Teachers({ Count }) {
  //Managing state of teachers data:
  const [teachers, setTeachers] = useState([]);
  //Fetching teachers data:
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div className=" flex justify-center items-center">
      <div className="grid  grid-cols-1 md:grid-cols-3  gap-6 ">
        {teachers.map((teacher, index) => {
          return (
            <div
              key={index}
              className="card  w-auto bg-base-100 shadow-xl  ms-4"
            >
              <figure>
                <img src={teacher.picture} className="  " />
              </figure>
              <div className="card-body">
                <h2 className="font-bold ">{teacher.name}</h2>
                <p>Age:{teacher.age}</p>
                <p>Department: {teacher.Department}</p>
                <p>Email: {teacher.email}</p>
                <p>Gender: {teacher.gender}</p>
                <p>Position: {teacher.position}</p>
                <h2 className="font-bold text-lg">
                  Salary : {teacher.salary} $
                </h2>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => Count(teacher)}
                    className="btn btn-primary text-white font-bold"
                  >
                    Add <AiOutlineUserAdd></AiOutlineUserAdd>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
