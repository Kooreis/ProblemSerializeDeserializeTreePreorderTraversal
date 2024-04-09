Here is a TypeScript solution for serializing and deserializing a tree using preorder traversal:

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class Codec {
    // Encodes a tree to a single string.
    serialize(root: TreeNode | null): string {
        if (root === null) {
            return 'X';
        }
        const leftSerialized = this.serialize(root.left);
        const rightSerialized = this.serialize(root.right);
        return root.val + ',' + leftSerialized + ',' + rightSerialized;
    }

    // Decodes your encoded data to tree.
    deserialize(data: string): TreeNode | null {
        const nodesLeft = data.split(',');
        return this.deserializeHelper(nodesLeft);
    }

    private deserializeHelper(nodesLeft: string[]): TreeNode | null {
        const valueForNode = nodesLeft.shift();
        if (valueForNode === 'X') {
            return null;
        }
        const newNode = new TreeNode(parseInt(valueForNode as string));
        newNode.left = this.deserializeHelper(nodesLeft);
        newNode.right = this.deserializeHelper(nodesLeft);
        return newNode;
    }
}

// Your Codec object will be instantiated and called as such:
// const ser = new Codec();
// const deser = new Codec();
// const tree = ser.serialize(root);
// const ans = deser.deserialize(tree);
// console.log(ans);
```

This solution uses a TreeNode class to represent the nodes of the tree. The Codec class is responsible for the serialization and deserialization of the tree. The serialize method uses preorder traversal to convert the tree into a string. The deserialize method converts the string back into a tree. The deserializeHelper is a helper method used by the deserialize method to construct the tree.