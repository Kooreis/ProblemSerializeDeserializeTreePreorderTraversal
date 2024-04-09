Here is a JavaScript solution using Node.js:

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Codec {
    serialize(root) {
        if (!root) return 'null';
        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`;
    }

    deserialize(data) {
        const nodes = data.split(',');
        return this.buildTree(nodes);
    }

    buildTree(nodes) {
        const val = nodes.shift();
        if (val === 'null') return null;
        const node = new TreeNode(parseInt(val, 10));
        node.left = this.buildTree(nodes);
        node.right = this.buildTree(nodes);
        return node;
    }
}

const codec = new Codec();
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = codec.serialize(tree);
console.log(serialized);
const deserialized = codec.deserialize(serialized);
console.log(codec.serialize(deserialized));
```

This solution defines a `TreeNode` class for the tree nodes and a `Codec` class for serialization and deserialization. The `serialize` method uses preorder traversal to convert the tree into a string. The `deserialize` method converts the string back into a tree. The `buildTree` helper method is used to construct the tree from the array of node values.