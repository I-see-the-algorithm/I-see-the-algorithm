/*
 * DataStructure/Stack Page
 */

import { useEffect, useState } from "react";
import StackAnimation from "../../components/stack/StackAnimation";

const StackPage = () => {
    const [commands, setCommands] = useState([]);
    const [el, setEl] = useState(1);

    const [cmdList, setCmdList] = useState([]);

    const addCommand = () => {
        const newCmd = {
            cmd: 1,
            el: el
        };
        setEl(el + 1);
        setCmdList([...cmdList, newCmd]);
    }
    const popCmd = (index) => {
        setCmdList((prevCmdList) => {
            const updatedCmdList = [...prevCmdList];
            updatedCmdList.splice(index, 1);
            return updatedCmdList;
        });
    }
    const handleOperationChange = (index, newOperation) => {
        setCmdList((prevCmdList) => {
            const updatedCmdList = [...prevCmdList];
            updatedCmdList[index] = {
                ...updatedCmdList[index],
                cmd: newOperation === "push" ? 1 : 0,
            };
            return updatedCmdList;
        });
    };
    const handleInputChange = (index, value) => {
        setCmdList((prevCmdList) => {
            const updatedCmdList = [...prevCmdList];
            updatedCmdList[index] = {
                ...updatedCmdList[index],
                el: value,
            };
            return updatedCmdList;
        });
    }

    const onClickPlayButton = () => {
        setCommands([...cmdList]);
    }

    return (
        <div>
            <h1>Stack</h1>

            <StackAnimation commands={commands}/>

            <button onClick={onClickPlayButton}>Play</button>

            <div>
                <ul>
                {cmdList.map((cmd, index) => (
                    <li key={index}>
                        <select
                            value={cmd.cmd === 1 ? "push" : "pop"}
                            onChange={(e) => handleOperationChange(index, e.target.value)}
                        >
                            <option value="push">push</option>
                            <option value="pop">pop</option>
                        </select>
                        {cmd.cmd === 1 && (
                            <input
                                type="number"
                                value={cmd.el}
                                onChange={(e) =>
                                    handleInputChange(index, e.target.value)
                                }
                            />
                        )}
                        <button onClick={() => popCmd(index)}>x</button>
                    </li>
                ))}
                </ul>
                <button onClick={addCommand}>Add</button>
            </div>
        </div>
    )
}

export default StackPage;