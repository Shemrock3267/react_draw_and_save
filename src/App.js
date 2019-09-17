import React from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "./signature.css";

function App() {
  return (
    <div className="App">
      <h1>Draw & save App</h1>
      <Popup
        modal
        trigger={<button> Open drawing pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            <button className="close-btn" onClick={close}>
              Close
            </button>
          </>
        )}
      </Popup>
    </div>
  );
}

export default App;
