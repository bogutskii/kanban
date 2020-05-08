import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';


const columnsInitial = [
  {
    nameBoard: 'todo',
    color: 'primary',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo1'
      }]
  },
  {
    nameBoard: 'progress',
    color: 'secondary',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo2'
      },
      {
        id: uuidv4(),
        name: 'todo3'
      }]
  },

  {
    nameBoard: 'review',
    color: 'warning',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo 4'
      },
      {
        id: uuidv4(),
        name: 'todo 5'
      }]
  },

  {
    nameBoard: 'done',
    color: 'success',
    tasks: [
      {
        id: uuidv4(),
        name: 'todo 6'
      },
      {
        id: uuidv4(),
        name: 'todo 7'
      },
      {
        id: uuidv4(),
        name: 'todo 8'
      },
      {
        id: uuidv4(),
        name: 'todo 9'
      }]
  }
]


function App() {
  const [columns, setColumns] = useState(columnsInitial)

  const up = (arg) => {
    const reranged = columns.map((col) => {
        if (col.nameBoard === arg.columnName) {
          const tasks = col.tasks;
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === arg.taskId) {
              if (i > 0) {
                [tasks[i], tasks[i - 1]] = [tasks[i - 1], tasks[i]]
                return {...col, tasks}
              }
              ;
            }
          }
          return {...col, tasks}
        } else
          return col
      }
    )
    setColumns(reranged)
  }

  const down = (arg) => {
    const reranged = columns.map((col) => {
        if (col.nameBoard === arg.columnName) {
          const tasks = col.tasks;
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === arg.taskId) {
              if (i < tasks.length - 1) {
                [tasks[i], tasks[i + 1]] = [tasks[i + 1], tasks[i]]
                return {...col, tasks}
              }
              ;
            }
          }
          return {...col, tasks}
        } else
          return col
      }
    )
    setColumns(reranged)
  }


  const left = (arg) => {
    const reranged = columns.map((col, index) => {
        if (col.nameBoard === arg.columnName) {
          if (index > 0) {
            for (let i = 0; i < col.tasks.length; i++) {
              if (col.tasks[i].id === arg.taskId) {
                columns[index - 1].tasks.push(...col.tasks.splice(i, 1))

                return {...col}


              }
            }
          }
          return {...col}
        } else
          return col
      }
    )
    setColumns(reranged)
  }

  const right = (arg) => {
    const reranged = columns.map((col, index) => {
        if (col.nameBoard === arg.columnName) {
          if (index < columns.length - 1) {
            for (let i = 0; i < col.tasks.length; i++) {
              if (col.tasks[i].id === arg.taskId) {
                 console.log(arg.taskId)

                columns[index + 1].tasks.push(...col.tasks.splice(i, 1))

                return {...col}


              }
            }
          }
          return {...col}
        } else
          return col
      }
    )
    setColumns(reranged)
  }

  return (
    <div className="container">
      <h1 className="mb-4 mt-4">Kanban</h1>
      <button>Create task</button>
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
                      </h5>
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
