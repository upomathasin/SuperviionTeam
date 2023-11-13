import logo from "./logo.svg";
import "./App.css";
import Teachers from "./Components/Teachers/Teachers";
import Cover from "./Components/Cover/Cover";
import { useState } from "react";

function App() {
  const [addTeacher, setAddTeacher] = useState([]);
  const sum = addTeacher.reduce((sum, teacher) => {
    return sum + teacher.salary;
  }, 0);
  const Count = (teacher) => {
    if (addTeacher.length == 0) {
      const newTeacher = [...addTeacher, teacher];

      setAddTeacher(newTeacher);
    } else {
      if (!addTeacher.find((t) => t.id === teacher.id)) {
        const newTeacher = [...addTeacher, teacher];

        setAddTeacher(newTeacher);
      } else {
        alert("Teacher Already added !");
      }
    }
  };
  return (
    <div className="App">
      <Cover></Cover>
      <div className="grid   md:grid-cols-12 sm:grid-cols-2">
        <div className="col-start-1 col-end-9 ">
          <Teachers Count={Count}></Teachers>
        </div>

        <div className="col-start-10 col-end-12  mt-20 flex flex-col items-center">
          {addTeacher.length !== 0 && (
            <div>
              <h1 className="text-2xl font-bold">
                Total Teacher in Team : {addTeacher.length}
              </h1>
              <h2 className="text-2xl text-primary">Total Cost : {sum} $</h2>
            </div>
          )}
          <ul className="menu bg-base-200 w-56 rounded-box mt-6">
            <h2 className="text-2xl text-primary">
              {addTeacher.length === 0
                ? "No Teacher Added Yet !"
                : "Teachers Added:"}
            </h2>
            {addTeacher.map((teacher) => (
              <li>
                <a>
                  <div className="avatar">
                    <div className=" w-10 rounded-full">
                      <img src={teacher.picture} />
                    </div>
                  </div>
                  {teacher.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
