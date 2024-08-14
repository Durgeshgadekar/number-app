import React, { useReducer } from 'react';
import './App.css';

const initialState = {
  count: 0,
  history: [],
  future: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (state.count < 150) {
        const newCount = state.count + 1;
        return {
          count: newCount,
          history: [...state.history, state.count],
          future: [],
        };
      }
      return state;
    case 'SUBTRACT':
      if (state.count > 0) {
        const newCount = state.count - 1;
        return {
          count: newCount,
          history: [...state.history, state.count],
          future: [],
        };
      }
      return state;
    case 'UNDO':
      if (state.history.length > 0) {
        const previousCount = state.history[state.history.length - 1];
        return {
          count: previousCount,
          history: state.history.slice(0, -1),
          future: [state.count, ...state.future],
        };
      }
      return state;
    case 'REDO':
      if (state.future.length > 0) {
        const nextCount = state.future[0];
        return {
          count: nextCount,
          history: [...state.history, state.count],
          future: state.future.slice(1),
        };
      }
      return state;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${(state.count / 150) * 100}%`,
            transition: 'width 0.3s ease',
          }}
        ></div>
      </div>
      <div className="controls">
        <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
        <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
        <button onClick={() => dispatch({ type: 'UNDO' })} disabled={state.history.length === 0}>Undo</button>
        <button onClick={() => dispatch({ type: 'REDO' })} disabled={state.future.length === 0}>Redo</button>
      </div>
      <p>Current Value: {state.count}</p>
    </div>
  );
}

export default App;
