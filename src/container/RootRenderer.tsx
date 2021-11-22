import React from 'react';
import { BranchNode } from '../Models/BranchNode';
import { DbLoadResponse } from '../Models/DbLoadResponse';
import { DbSaveRequestParams } from '../Models/DbSaveRequest';
import BranchRenderer from './BranchRenderer';

interface RootRendererProps {
    data: DbLoadResponse;
}

const RootRenderer: React.FC<RootRendererProps> = ({ data: { roots } }) => {
    const updateTreeToDb = (requestData: DbSaveRequestParams) => {
        console.log(requestData);
        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(requestData)
        }).then(()=>{
            // do something here
        }).catch((e)=>{
            alert("Network Error.");
        })
    }

    return (
        <div>
            <div style={{ margin: "10px  0px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ width: 15, height: 5, backgroundColor: "lightgreen", marginRight: 10, marginTop: 7 }}></div>
                    <label>Root item</label>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: 15, height: 5, backgroundColor: "red", marginRight: 10, marginTop: 7 }}></div>
                    <label>Branch</label>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: 15, height: 5, backgroundColor: "black", marginRight: 10, marginTop: 7 }}></div>
                    <label>Leaf</label>
                </div>
            </div>
            {
                roots.map((currentBranchNode: BranchNode, index: number) => {
                    const rootName: string = `Root: ${index}`
                    return (
                        <div style={{ border: "8px solid lightgreen", padding: 5, margin: 5 }} key={index} >
                            <div>
                                <label>{rootName}</label>
                            </div>
                            <BranchRenderer data={currentBranchNode} updateTreeToDb={updateTreeToDb} rootName={rootName} />
                        </div>
                    )
                })
            }

        </div>
    );
}


export default RootRenderer;