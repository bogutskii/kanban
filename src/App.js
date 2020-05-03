import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const columns = [
    {
      name: 'todo',
      color: 'primary'
    },
    {
      name: 'progress',
      color: 'secondary'
    },
    {
      name: 'review',
      color: 'warning'
    },
    {
      name: 'done',
      color: 'success'
    }
  ]

  return (
    <div className="container">
      <h1>Kanban</h1>
      <div className="row">
        {columns.map(col =>
          <div className='col-sm d-flex'>
            <div className={`w-100 border-top border-${col.color}`}>
              <h3>{col.name}</h3>

            </div>
          </div>
        )
        }

      </div>
    </div>

  );
}

export default App;
