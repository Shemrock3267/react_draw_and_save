import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "./signature.css";

function App() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>Draw and save App</h1>
      <Popup
        modal
        trigger={<button> Open drawing pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            <button onClick={save}>Save</button>
            <button onClick={clear}>Clear</button>
            <button className="close-btn" onClick={close}>
              Close
            </button>
          </>
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
    </div>
  );
}

export default App;
