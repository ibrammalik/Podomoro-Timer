import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Settings = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Custom Times</h4>
          <label for="podomoro">Podomoro</label>
          <input type="text" value="25" id="podomoro" />
          <label for="break">Break</label>
          <input type="text" value="5" id="Break" />
          <label for="longBreak">Long Break</label>
          <input type="text" value="15" id="longBreak" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Reset</Button>
        <Button onClick={props.onHide}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;
