import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';


function App() {
  return (
    <div>
      <Board />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  //document.getElementById('root')
);

