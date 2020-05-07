import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const columnsInitial = [
  {
    nameBoard: 'todo',
    color: 'primary',
    tasks: [
      {
        id: 1,
        name: 'todo1'
      }]
  },
  {
    nameBoard: 'progress',
    color: 'secondary',
    tasks: [
      {
        id: 2,
        name: 'todo2'
      },
      {
        id: 3,
        name: 'todo3'
      }]
  },

  {
    nameBoard: 'review',
    color: 'warning',
    tasks: [
      {
        id: 4,
        name: 'todo 4'
      },
      {
        id: 5,
        name: 'todo 5'
      }]
  },

  {
    nameBoard: 'done',
    color: 'success',
    tasks: [
      {
        id: 6,
        name: 'todo 6'
      },
      {
        id: 7,
        name: 'todo 7'
      },
      {
        id: 8,
        name: 'todo 8'
      },
      {
        id: 9,
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

  return (
    <div className="container">
      <h1 className="mb-4 mt-4">Kanban</h1>
      <div className="row">
        {columns.map(col =>
          <div className='col-sm d-flex'>
            <div className={`w-100 border-top border-${col.color} border-width-4`}>
              <h3>{col.nameBoard}</h3>
              {
                col.tasks.map(task =>
                  <div className="card mb-2">
                    <div className="card-body">
                      <h5 className="card-title">
                        {task.name}
                      </h5>
                      <button type="button" className="btn btn-light"
                              onClick={() => up({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}>up
                      </button>
                      <button type="button" className="btn btn-light"
                              onClick={() => down({
                                  columnName: col.nameBoard,
                                  taskId: task.id
                                }
                              )}>down
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
