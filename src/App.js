import React, {useState, useEffect} from 'react';
import './App.css';

import useCore from './component/hook/core';
import useSwarm from './component/hook/swarm'
function App() {
  const [core] = useCore();
  const [swarm] = useSwarm();
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!swarm) return;
    console.log("new swarm");
    swarm.join(core.discoveryKey);

    swarm.on('connection', onConnection())
    function onConnection () {

    }
  },[])

  const handleAdd = () => {
    if (username === "" ) return;
    core.append(username);
    setUsername(username);
  }
  return (
    <div className="App">
      <div className="block">
        <input value = {username} onChange = {(e) => setUsername(e.target.value)} placeholder="James"/>
      </div>
      <div className="block">
        <button onClick = {()=> handleAdd()}>Add</button>
      </div>
    </div>
  );
}

export default App;
