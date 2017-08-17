```Add new Element dynamically```
The appendChild() method appends a node as the last child of a node.

If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.

You can also use this method to move an element from one element to another.

var node = document.getElementById("list2").lastChild;  //for last child to append  
var node = document.getElementById("list2").firstChild; //for last child to append  
document.getElementById("list1").appendChild(node);

First create an LI node,  
then create a Text node,  
then append the Text node to the LI node.  
Finally append the LI node to the list.   
