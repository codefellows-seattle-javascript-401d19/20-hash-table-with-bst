'use strict';

class BinarSearchTree{
  constructor(id, key, value){
    this._id = id;
    key;
    value;
    this.left = null;
    this.right = null;
    
  }


insert(id, key, value){
  if (this_id === id){
    throw new Error('BST KEY already Exists')
  }

  if(this._id > id){
    if(this.left){
      this.left.insert(id, key, value)
      return
    }else{
      this.left = new BinarSearchTree(id, key, value)
      return
    }
  }

  if(this.right){
    this.right.insert(id, key, value)
    return
  }else{
    this.right = new BinarSearchTree(id, key, value)
    return
  }
}

find(id){
  if (this._id === id){
    return this.value
  }

  if (this._id > id){
    if(this.left){
      return this.left.find(id)
    }else{
      return null
    }
  }

  remove(id){
    let foundID
    let parent
    let current = this

    while(!foundID && current !== null){
      if (current._id > id){
        parent = current
        current = current.left
      }else if (current._id < id){
        parent = current 
        current = current.right
      }else{
        foundID = current._id
      }
    }

    if(foundID){
      if(current.left && current.right){
        return this._removeWithOneChild(parent, current)
      }else{
        return this._removeWithOneChild(parent, current)
      }
    }else{
        return null
    }
  }
  
  _removeWithOneChild(parent, current){
    let leftNode = current.left
    let rightNode = cuurent.right

    if(!parent){
      if (current.right){
        current._id = current.right._id
        current.key = current.right.key
        current.value = rightNode.value
        current.right = rightNode.right
        current.left = rightNode.left
        return 'NODE REMOVED'
      } else if(current.left) {
        current._id = current.left._id
        current.key = current.left.key
        current.value = leftNode.value
        current.left = leftNode.left
        current.right = leftNode.right
        return 'NODE REMOVED'

      }else{
        this._id = null
        this.key = null
        this.value = null
      }
    }

    else{
      if (parent._id > current._id){
        parent.left = current.right
        return 'NODE REMOVED'
      }else{
        parent.right = current.left
        return 'NODE REMOVED'
     }
    }
   }

   _removeTwoChildren(parent, current){
     let reassignedNode = current.left
     let reassignedParent = reassignedNode.right

     while(reassignedNode.right){
       reassignedParent = reassignedNode
       reassignedNode = reassignedNode.right
     }
   }
  }
}