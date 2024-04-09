```cpp
#include <iostream>
#include <sstream>
#include <string>

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
    std::string serialize(TreeNode* root) {
        if (root == NULL) {
            return "null ";
        }
        return std::to_string(root->val) + " " + serialize(root->left) + serialize(root->right);
    }

    TreeNode* deserialize(std::string data) {
        std::istringstream iss(data);
        return deserializeHelper(iss);
    }

private:
    TreeNode* deserializeHelper(std::istringstream& iss) {
        std::string val;
        iss >> val;
        if (val == "null") {
            return NULL;
        }
        TreeNode* node = new TreeNode(stoi(val));
        node->left = deserializeHelper(iss);
        node->right = deserializeHelper(iss);
        return node;
    }
};

int main() {
    Codec codec;
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);

    std::string serialized = codec.serialize(root);
    std::cout << "Serialized: " << serialized << std::endl;

    TreeNode* deserialized = codec.deserialize(serialized);
    std::cout << "Deserialized: " << codec.serialize(deserialized) << std::endl;

    return 0;
}
```