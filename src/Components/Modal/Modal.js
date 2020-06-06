import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';
import Modal from "react-modal"


const [modalIsOpen, setModalIsOpen] = useState(false)
const [modalCreateTask, setModalCreateTask] = useState(
  {
    nameBoard: 'todo',
    task: {
      id: uuidv4(),
      name: '',
      taskText: ''
    }
  }
)




const Modal = () =>{

  <Modal className="modal-dialog" isOpen={modalIsOpen}
         onRequestClose={() => setModalIsOpen(false)}>

    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Create new task</h5>
      </div>

      <div className="modal-body">

        <form action="">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Board</label>
            </div>

            <select className="custom-select" onChange={changeBoard} value={modalCreateTask.nameBoard} >
              {columns.map((board) => <option key={uuidv4()}>{board.nameBoard}</option>)}
            </select>

          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input className="form-control" name="name" onChange={changeInModalTitle} required/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Text tasks</span>
            </div>
            <textarea className="form-control" name="taskText" onChange={changeInModalText}></textarea>
          </div>
        </form>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Cancel</button>
        <button type="button" className={`btn btn-${}``} onClick={saveModalTask}>Save</button>
      </div>
    </div>

  </Modal>



}

export default Modal