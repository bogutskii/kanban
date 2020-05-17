import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';
import Modal from "react-modal"


const columnsInitial = [
  {
    nameBoard: 'todo',
    color: 'primary',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo1',
        taskText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece'
      }]
  },
  {
    nameBoard: 'progress',
    color: 'secondary',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo2',
        taskText: 'Some text2'
      },
      {
        id: uuidv4(),
        name: 'todo3',
        taskText: 'There are many variations of passages of Lorem Ipsum available'
      }]
  },

  {
    nameBoard: 'review',
    color: 'warning',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo 4',
        taskText: 'Some text'
      },
      {
        id: uuidv4(),
        name: 'todo 5',
        taskText: 'Some text5'
      }]
  },

  {
    nameBoard: 'done',
    color: 'success',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo 6',
        taskText: 'It is a long established fact that a reader will be distracted by the readable content of a page when'
      },
      {
        id: uuidv4(),
        name: 'todo 7',
        taskText: 'Some text7'
      },
      {
        id: uuidv4(),
        name: 'todo 8',
        taskText: ''
      },
      {
        id: uuidv4(),
        name: 'todo 9',
        taskText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some'
      }]
  }
]

Modal.setAppElement('#root')

function App() {
  const [columns, setColumns] = useState(columnsInitial)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const up = (arg) => {
    const reranged = columns.map((col) => {
        if (col.nameBoard === arg.columnName) {
          const tasks = col.tasks;
          let ind = col.tasks.findIndex(el => el.id === arg.taskId)
          if (ind > 0) {
            [tasks[ind], tasks[ind - 1]] = [tasks[ind - 1], tasks[ind]]
            return {...col, tasks}
          }
        }
        return col
      }
    )
    setColumns(reranged)
  }

  const down = (arg) => {
    const reranged = columns.map((col) => {
        if (col.nameBoard === arg.columnName) {
          const tasks = col.tasks;
          let ind = col.tasks.findIndex(el => el.id === arg.taskId)
          if (ind < tasks.length - 1) {
            [tasks[ind], tasks[ind + 1]] = [tasks[ind + 1], tasks[ind]]
            return {...col, tasks}
          }
        }
        return col
      }
    )
    setColumns(reranged)
  }

  const left = (arg) => {
    const reranged = columns.map((col, index) => {
        if (col.nameBoard === arg.columnName) {
          if (index > 0) {
            let ind = col.tasks.findIndex(el => el.id === arg.taskId)
            columns[index - 1].tasks.push(...col.tasks.splice(ind, 1))
            return {...col}
          }
        }
        return col
      }
    )
    setColumns(reranged)
  }

  const right = (arg) => {
    const reranged = columns.map((col, index) => {
        if (col.nameBoard === arg.columnName) {
          if (index < columns.length - 1) {
            let ind = col.tasks.findIndex(el => el.id === arg.taskId)
            columns[index + 1].tasks.push(...col.tasks.splice(ind, 1))
            return {...col}
          }
        }
        return col
      }
    )
    setColumns(reranged)
  }

  const deleteTask = (arg) => {

    if (window.confirm("Are you sure?")) {
      const reranged = columns.map((col, index) => {
          if (col.nameBoard === arg.columnName) {
            let ind = col.tasks.findIndex(el => el.id === arg.taskId)
            return {
              ...col, ...col.tasks.splice(ind, 1)
            }
          }
          return col
        }
      )
      setColumns(reranged)
    }
  }

  return (
    <div className="container">
      <h1 className="mb-4 mt-4">Kanban</h1>


      <button className="btn btn-light" onClick={() => setModalIsOpen(true)}>Create task</button>

      <Modal className="modal-dialog" isOpen={modalIsOpen}
             onRequestClose={() => setModalIsOpen(false)}>

        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create new task</h5>
          </div>

          <div className="modal-body">


            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01">

                {columns.map((board,i) => <option value={i}>{board.nameBoard}</option>)}

              </select>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Title</span>
              </div>
              <input className="form-control" aria-label="With textarea"></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Text tasks</span>
              </div>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Cancel</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>

      </Modal>


      <div className="row">
        {columns.map(col =>
          <div className='col-sm d-flex' key={col.nameBoard}>
            <div className={`w-100 border-top border-${col.color} border-width-4`}>
              <h3>{col.nameBoard}</h3>
              {
                col.tasks.map(task =>
                  <div className="card mb-2" key={task.id}>
                    <div className="card-body">
                      <h5 className="card-title">
                        {task.name}

                        <button type="button" className="btn btn-light float-right" data-toggle="modal" href="#modal"
                                onClick={() => deleteTask({
                                    columnName: col.nameBoard,
                                    taskId: task.id
                                  }
                                )}>×
                        </button>
                      </h5>

                      <p>{task.taskText}</p>
                      <button type="button" className="btn btn-light"
                              onClick={() => up({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}> ↑
                      </button>
                      <button type="button" className="btn btn-light"
                              onClick={() => down({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}> ↓
                      </button>
                      <button type="button" className="btn btn-light"
                              onClick={() => left({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}> ←
                      </button>
                      <button type="button" className="btn btn-light"
                              onClick={() => right({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}> →
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default App;
