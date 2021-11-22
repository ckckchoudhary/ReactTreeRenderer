import React from 'react';
import { BranchNode } from '../Models/BranchNode';
import { DbLoadResponse } from '../Models/DbLoadResponse';
import { DbSaveRequestParams } from '../Models/DbSaveRequest';
import BranchRenderer from './BranchRenderer';

interface RootRendererProps {
    data: DbLoadResponse;
}

const RootRenderer: React.FC<RootRendererProps> = ({ data: { roots } }) => {
    const updateTreeToDb = (requestData: DbSaveRequestParams) =>{
        
    }

    return (
        <div>
            {
                roots.map((currentBranchNode: BranchNode, index: number) => {
                    const rootName:string = `Root: ${index}`
                    return (
                        <div style={{ border: "8px solid lightgreen", padding: 5, margin: 5 }} key={index} >
                            <div>
                                <label>{rootName}</label>
                            </div>
                            <BranchRenderer data={currentBranchNode} updateTreeToDb={updateTreeToDb}/>
                        </div>
                    )
                })
            }

        </div>
    );
}


export default RootRenderer;