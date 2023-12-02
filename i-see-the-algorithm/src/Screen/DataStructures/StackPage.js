/*
 * DataStructure/Stack Page
 */

import { useState } from "react";
import StackAnimation from "../../components/stack/StackAnimation";

const StackPage = () => {
    const [commands, setCommands] = useState([]);
    const [el, setEl] = useState(1);

    const handlePush = () => {
        const newCmd = {
            cmd: 1,
            el: el
        };
        setEl(el + 1);
        setCommands([...commands, newCmd]);
    }
    const handlePop = () => {
        const newCmd = {
            cmd: 0
        };
        setCommands([...commands, newCmd]);
    }

    return (
        <div>
            <h1>Stack</h1>

            <StackAnimation commands={commands}/>

            <button onClick={handlePush}>Push</button>
            <button onClick={handlePop}>Pop</button>
        </div>
    )
}

export default StackPage;