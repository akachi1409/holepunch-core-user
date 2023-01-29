import { useEffect, useState } from "react";
import Hyperswarm from "hyperswarm";

export default function useSwarm() {
  const [swarm, setSwarm] = useState(null);
  useEffect(() => {
    const swarm = new Hyperswarm();
    setSwarm(swarm);
    return () => {
      // console.log('hook swarm cleanup')
      swarm.destroy();
      for (const socket of swarm.connections) socket.destroy();
    };
  }, []);
  return [swarm];
}
