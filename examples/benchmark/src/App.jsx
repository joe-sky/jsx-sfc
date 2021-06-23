import React from 'react';
import Benchmark, { BenchmarkType } from 'react-component-benchmark';
import Results from './Result';
import TestCases from './TestCases';

export default function App() {
  const benchmarkRef = React.createRef();
  const [benchmarkType, setBenchmarkType] = React.useState(BenchmarkType.MOUNT);
  const [componentName, setComponent] = React.useState(Object.keys(TestCases)[0]);
  const [samples, setSamples] = React.useState(50);
  const [running, setRunning] = React.useState(false);
  const [results, dispatch] = React.useReducer(resultsReducer, []);

  const handleComplete = result => {
    dispatch({ result, type: benchmarkType, component: componentName });
    setRunning(false);
  };

  const handleChangeComponent = event => {
    setComponent(event.target.value);
  };

  const handleChangeType = event => {
    setBenchmarkType(event.target.value);
  };

  const handleStart = () => {
    setRunning(true);
    benchmarkRef.current.start();
  };

  const handleClear = () => {
    dispatch('CLEAR');
  };

  const handleChangeSamples = event => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setSamples(value);
    }
  };

  return (
    <div className="wrapper">
      <div className="app">
        <div className="content">
          <div className="form">
            <label>
              Component
              <select disabled={running} onChange={handleChangeComponent}>
                {Object.keys(TestCases).map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Benchmark type
              <select disabled={running} onChange={handleChangeType}>
                {Object.keys(BenchmarkType).map(name => (
                  <option key={name}>{name.toLowerCase()}</option>
                ))}
              </select>
            </label>
            <label>
              Samples
              <input
                disabled={running}
                type="number"
                min={20}
                max={100}
                value={samples}
                onChange={handleChangeSamples}
              />
            </label>
            <button disabled={running} onClick={handleStart}>
              Start
            </button>
            <button disabled={running || results.length === 0} onClick={handleClear}>
              Clear
            </button>
          </div>

          <div className="results">
            <Results results={results} />
          </div>
        </div>

        <div className="component">
          <Benchmark
            key={`${TestCases[componentName].component}-${benchmarkType}-${results.length}`}
            component={TestCases[componentName].component}
            componentProps={TestCases[componentName].props}
            includeLayout
            onComplete={handleComplete}
            ref={benchmarkRef}
            samples={samples}
            timeout={10000}
            type={benchmarkType}
          />
        </div>
      </div>
    </div>
  );
}

function resultsReducer(state = [], results) {
  if (results === 'CLEAR') {
    return [];
  }
  state.push(results);
  return state;
}
