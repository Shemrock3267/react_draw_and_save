import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signature.css";

function App() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div className="App">
      <h1>Draw and save App</h1>
      <Popup
        modal
        trigger={<button className="btn btn-primary"> Open drawing pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <React.Fragment>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            <button className="btn btn-success mr-1 shadow-none" onClick={save}>
              Save
            </button>
            <button className="btn btn-danger shadow-none" onClick={clear}>
              Clear
            </button>
            <button className="btn btn-dark ml-1 shadow-none" onClick={close}>
              Close
            </button>
          </React.Fragment>
        )}
      </Popup>
      <br />
      <br />
      {imageURL ? (
        <img
          src={imageURL}
          alt="signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "250px"
          }}
        />
      ) : null}

      <button className="btn btn-info btn-download shadow-none mt-2">
        <a
          href={imageURL}
          className="btn btn-download"
          download="new-signature.png"
        >
          Download
        </a>
      </button>
    </div>
  );
}

export default App;
