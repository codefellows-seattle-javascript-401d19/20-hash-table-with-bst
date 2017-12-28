'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('binary-search-tree.js', () => {
  let rootNode, first, second, third, fourth, fifth, sixth, seventh, leftOne, secondRight, secondRightRight, secondRightRightLeft;

  beforeEach(() => {
    rootNode = new BinarySearchTree('b', 100);
    first = new BinarySearchTree('c', 200);
    second = new BinarySearchTree('k', 300);
    third = new BinarySearchTree('j', 250);
    fourth = new BinarySearchTree('i', 240);
    fifth = new BinarySearchTree('h', 230);
    sixth = new BinarySearchTree('f', 210);
    seventh = new BinarySearchTree('g', 220);
    leftOne = new BinarySearchTree('a', 80);
    secondRight = new BinarySearchTree('l', 350);
    secondRightRight = new BinarySearchTree('n', 370);
    secondRightRightLeft = new BinarySearchTree('m', 360);

    
    rootNode.right = first;
    rootNode.left = leftOne;
    first.right = second;
    second.left = third;
    second.right = secondRight;
    secondRight.right = secondRightRight;
    secondRightRight.left = secondRightRightLeft;
    third.left = fourth;
    fourth.left = fifth;
    fifth.left = sixth;
    sixth.right = seventh;

    //                          b, 100 - rootNode
    //                         /      \
    //          leftOne - a, 80        c, 200 - first
    //                                   \
    //                                    k, 300 - second
    //                                    /     \
    //                      third - j, 250       l, 350 - secondRight
    //                              /             \
    //               fourth - i, 240               n, 370 - secondRightRight
    //                         /                  / 
    //           fifth - h, 230                 m, 360 - secondRightRightLeft 
    //                      /   
    //        sixth - f, 210    
    //                       \
    //                        g, 220 - seventh
  });

  describe('findParentOf(value)', () => {
    test('should return the parent node with a child containing the selected value.', () => {
      expect(rootNode.findParentOf('k')).toEqual(first);
      expect(rootNode.findParentOf('j')).toEqual(second);
    });

    test('should throw an error if the value is not a descendent of the calling node.', () => {
      expect(() => {
        rootNode.findParentOf('z');
      }).toThrow();
    });

    test('should return null if the calling node has the requested value.', () => {
      expect(rootNode.findParentOf('b')).toBeNull();
      expect(first.findParentOf('c')).toBeNull();
    });
  });

  describe('getLefty()', () => {
    test('should return the node that results from going left every time.', () => {
      expect(second.getLefty()).toEqual(sixth); 
      expect(rootNode.getLefty()).toEqual(leftOne);
    });
  });

  describe('remove(value)', () => {
    test('should return null if the provided value is not in the tree.', () => {
      expect(rootNode.remove('z')).toBeNull();
    });

    test('should return the calling node and remove the association with the parent node when a leaf is removed.', () => {
      expect(rootNode.find('f').right.value).toEqual(220);
      expect(rootNode.find('f').right.key).toEqual('g');
      expect(rootNode.remove('g')).toEqual(rootNode);
      expect(rootNode.find('g')).toBeNull();
      expect(rootNode.find('f').right).toBeNull();

      expect(rootNode.find('n').left.value).toEqual(360);
      expect(rootNode.find('n').left.key).toEqual('m');
      expect(rootNode.remove('m')).toEqual(rootNode);
      expect(rootNode.find('m')).toBeNull();
      expect(rootNode.find('n').left).toBeNull();
    });

    test('should return the calling node and bypass the removing node if the removing node has one child', () => {
      expect(rootNode.find('h').left.value).toEqual(210);
      expect(rootNode.find('h').left.key).toEqual('f');
      expect(rootNode.find('f')).toBeTruthy();
      expect(rootNode.remove('f')).toEqual(rootNode);
      expect(rootNode.find('h').left.value).toEqual(220);
      expect(rootNode.find('h').left.key).toEqual('g');

      expect(rootNode.find('k').right.value).toEqual(350);
      expect(rootNode.find('k').right.key).toEqual('l');
      expect(rootNode.find('l')).toBeTruthy();
      expect(rootNode.remove('l')).toEqual(rootNode);
      expect(rootNode.find('k').right.value).toEqual(370);
      expect(rootNode.find('k').right.key).toEqual('n');
      expect(rootNode.find('n').left.value).toEqual(360);
      expect(rootNode.find('n').left.key).toEqual('m');
    });

    test('should return the calling node and connect the successor to the parent of the removed node, and connect the children to the successor.', () => {
      expect(rootNode.find('k')).toBeTruthy();
      expect(first.right.value).toEqual(300);
      expect(first.right.key).toEqual('k');
      expect(first.right.left.value).toEqual(250);
      expect(first.right.left.key).toEqual('j');
      expect(rootNode.remove('k')).toEqual(rootNode);
      expect(first.right.value).toEqual(350);
      expect(first.right.key).toEqual('l');
      expect(first.right.left.value).toEqual(250);
      expect(first.right.left.key).toEqual('j');
    });

    test('should set the key and value to null if called on root with no children.', () => {
      seventh.remove('g');
      expect(rootNode.find('g')).toBeNull();
      expect(seventh.value).toBeNull();
      expect(seventh.key).toBeNull();
    });

    test('should set the value, key, left, and right to the values from the child, if one child', () => {
      fifth.remove('h');
      expect(rootNode.find('h')).toBeNull();
      expect(fifth.value).toEqual(210);
      expect(fifth.key).toEqual('f');
      expect(fifth.right).toEqual(seventh);
    });

    test('should replace the root value with the successor value, and the root right with the successor parent', () => {
      rootNode.remove('b');
      expect(rootNode.left).toEqual(leftOne);
      expect(rootNode.value).toEqual(200);
      expect(rootNode.key).toEqual('c');
      expect(rootNode.right).toEqual(second);
    });
  });
});