import { useEffect, useState } from 'react'
import Hypercore from 'hypercore'

export default function useCore() {
    const [core, setCORE] = useState(null);
    useEffect(async ()=> {
        const core = new Hypercore('./writer-storage')
        await core.ready()
        setCORE(core);
    }, [])
    return [core]
} 
