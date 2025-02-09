import Img from "./Img";
import Left from "./Left";

export default function App() {
  return (

      <div className="App col-12 container d-flex  flex-wrap justify-content-center align-items-center ">
        <div className="FormDegree d-flex flex-column-reverse flex-md-row justify-content-center align-items-center gap-5">
          <div className="col-12 col-md-6">
                      <Left />
          </div>
          <div className="col-12 col-md-6">
                      <Img />
            </div>


        </div>
      </div>

  );
}
