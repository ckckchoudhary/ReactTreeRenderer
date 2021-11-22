import React, { useState } from 'react';
import { LeafNode } from '../Models/LeafNode';
import "../App.css"
import { DbSaveRequestParams } from '../Models/DbSaveRequest';

export interface LeafProps {
    data: LeafNode;
    updateTreeToDb(requestData: DbSaveRequestParams): void;
    branchName: string;
    rootName: string
}

export const Leaf: React.FC<LeafProps> = ({ data, updateTreeToDb, branchName, rootName }) => {
    const { name, group } = data;
    const [newGroupVal, setnewGroupVal] = useState("");


    const submitData = () => {
        if (newGroupVal.trim()) {
            const requestData: DbSaveRequestParams = {
                group: newGroupVal,
                leafName: name,
                rootName: rootName
            };
            updateTreeToDb(requestData);
        } else {
            alert("Please enter a value.");
        }
    }

    return (
        <div className="leaf" style={{ border: "3px solid black", textAlign: "left", margin: 10, padding: 5 }}>
            <div>
                <label>Group: {group}</label>
                <input value={newGroupVal} style={{ marginLeft: 10 }} placeholder="Enter New Group" onChange={(e) => setnewGroupVal(e?.target?.value)}></input>
                <button style={{ marginLeft: 10 }} onClick={submitData}>Change Group Name</button>
            </div>
            <div>
                <label>Name: {name}</label>
            </div>
        </div>
    );
}


export default Leaf;