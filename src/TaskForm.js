import React, { useState } from "react";

const TaskForm=()=>{
    const[Taskname, setTaskname]= useState('')
    return(
        <div>
            <form>
                <button>+</button>
                <input type="text" 
                value={Taskname} 
                onChange={ev=>setTaskname(ev.target.value)}
                placeholder="Your Next Task" />
            </form>
        </div>
    )
}
export default TaskForm