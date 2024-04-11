class Codec {
    serialize(root) {
        if (!root) return 'null';
        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`;
    }
}