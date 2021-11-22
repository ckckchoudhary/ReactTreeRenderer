import React, { Component } from 'react';
import Leaf from '../components/Leaf';
import { BranchNode } from '../Models/BranchNode';
import { DbSaveRequestParams } from '../Models/DbSaveRequest';

interface BranchRendererProps {
    data: BranchNode;
    updateTreeToDb(requestData: DbSaveRequestParams): void;
    rootName:string
}

class BranchRenderer extends Component<BranchRendererProps> {
    render() {
        const { data: { children, name }, updateTreeToDb, rootName } = this.props;
        return (
            <div style={{ margin: 20, marginLeft: 50, border: "5px solid red" , padding: 5}}>
                <div>Branch Name: {name}</div>
                {children.map((currentNode: any, index:number) => {
                    if (currentNode.children) {
                        return <BranchRenderer data={currentNode} key={index} updateTreeToDb={updateTreeToDb} rootName={rootName}/>
                    } else {
                        return <Leaf data={currentNode} key={index} updateTreeToDb={updateTreeToDb} branchName={name} rootName={rootName}/>
                    }
                })
                }
            </div>
        );
    }
}

export default BranchRenderer;