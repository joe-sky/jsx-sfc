import React from 'react';

export default function Results({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>mean</th>
          <th>layout</th>
          <th>p95</th>
          <th>p99</th>
        </tr>
      </thead>
      {[...results].reverse().map((result, i) => (
        <Result key={i} index={results.length - i} {...result} />
      ))}
    </table>
  );
}

export function Result({ component, index, result, type }) {
  return (
    <tbody>
      <tr>
        <th colSpan={3}>
          Run {index}: {type} - {component}
        </th>
        <th colSpan={1}>{result.sampleCount} samples</th>
      </tr>
      <tr>
        <td>
          {result.mean.toFixed(3)}ms (±{result.stdDev.toFixed(3)}ms)
        </td>
        <td>{result.layout.mean.toFixed(3)}ms</td>
        <td>{result.p95.toFixed(3)}ms</td>
        <td>{result.p99.toFixed(3)}ms</td>
      </tr>
    </tbody>
  );
}
