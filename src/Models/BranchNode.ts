import { LeafNode } from "./LeafNode";

export interface BranchNode {
    name: string,
    children: Array<BranchNode | LeafNode>,
}
