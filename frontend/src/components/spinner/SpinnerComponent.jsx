import React from "react";
import "./Spinner.css";
import { Spinner } from 'react-bootstrap'

function SpinnerComponent() {
  return (
    <div className="loading-spinner-animation">
      <Spinner animation="border" />
    </div>
  );
}

export default SpinnerComponent;
