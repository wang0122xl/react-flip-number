import React, { useState } from 'react';
import './App.less';
import FlipNumber from './libs/flip'

const App = () => {
  const [num, setNum] = useState(0)
  const _changeNumber = () => {
    setNum(num + 1)
}
  return (
    <div className="app">
      <FlipNumber  layerClass='layer' itemClass='item' number={num} />
      <p onClick={_changeNumber}>+1</p>
    </div>
  );
}

export default App;
