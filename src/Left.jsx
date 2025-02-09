import { useState , useRef } from "react";

export default function Left() {
  const [Degree, setDegree] = useState("Your Degree");
  const [Gpa, setGpa] = useState("");
  const DegreeInput = useRef();


  
  const ShowDegree = () => {
    setDegree(DegreeInput.current.value);
    if (Degree < 0 || Degree > 100) {
      setGpa("not valid");
    } else {
      if (Degree >= 90 || Degree == 100) {
        setGpa("A (Excellent)");
      } else if (Degree >= 75) {
        setGpa("B (Very Good)");
      } else if (Degree >= 60) {
        setGpa("C (Good)");
      } else if (Degree >= 50) {
        setGpa("D (Pass)");
      } else {
        setGpa("F (Fail)");
      }
    }
  };

  return (
    <div className="left">
      <div className="form">
        <h2 className="text-primary text-center mb-4">
          Student Grade Converter
        </h2>
        <form
          className="mb-4"
          onSubmit={(e) => {
            e.preventDefault(), {handleSubmit};
          }}
        >
          <div className="mb-3">
            <label htmlFor="studentDegree" className="form-label fs-5">
              Student degree
            </label>
            <input
              type="number"
              className="form-control p-3"
              placeholder="Your degree"
              ref={DegreeInput}
            />
          </div>
          <button
            type="button"
            className="btn btn-dark w-100 p-3 rounded-pill"
            onClick={ShowDegree}
          >
            Submit
          </button>
        </form>
        <p className="fs-5 text-center border border-dark p-3">
          Your degree is {Gpa}
        </p>
      </div>
    </div>
  );
}
