
    bst = new BST(); 

    bst.add(45); 
    bst.add(1);
    bst.add(14); 
    bst.add(18);
    bst.add(29);
    bst.add(-8);
    console.log(bst);

    buscar = -8; 
    console.log(`El numero ${buscar}, se encuentra: ${bst.search(buscar)}`);


    function Node (value){
        this.value = value; 
        this.left = null; 
        this.rigth = null; 
    }

    function BST(){
        this.root = null; 
        this.add = BSTAdd; 
        this.addInner = BSTAddInner; 
        this.search = BSTSearch; 
        this.searchInner = BSTSearchInner;
    }

    function BSTAdd(value){
        return this.addInner(value, this.root); 
    }

    function BSTAddInner(value, current){
        if(!this.root){
            this.root = new Node(value); 
        }else {
            if (current.value>value){
                if (!current.left){
                    current.left = new Node(value); 
                    return true; 
                }else { 
                    return this.addInner(value,current.left);
                }
            }else if(current.value<value){
                if(!current.rigth){
                    current.rigth = new Node(value); 
                    return true; 
                }else {
                    return this.addInner(value, current.rigth);
                }
            }
            return false; 
        }
    }

    function BSTSearch(value){
        return this.searchInner(value,this.root);
    }

    function BSTSearchInner(value, current){
        if (!current){
            return false; 
        } else {
            if (current.value == value){
                return true;
            }else {
                if (current.value > value){
                    return this.searchInner(value, current.left);
                }else {
                    if (current.value < value){
                        return this.searchInner(value, current.rigth);
                    }
                }
                return false;
            }
        }
    }