import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Settings = (props) => {
  const { podomorovalue, breakvalue, longbreakvalue, handlechangepodomoro, handlechangebreak, handlechangelongbreak, onHide, show, onSave, reset } = props;
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Custom Times</h4>
          <label>Podomoro</label>
          <input type="text" id="podomoro" value={podomorovalue} onChange={handlechangepodomoro} />
          <label>Break</label>
          <input type="text" id="Break" value={breakvalue} onChange={handlechangebreak} />
          <label>Long Break</label>
          <input type="text" id="longBreak" value={longbreakvalue} onChange={handlechangelongbreak} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={onSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;
