import React, { useState ,useEffect} from "react";
import "./Tree.css";

const Tree = ({ data }) => {
    

  return (

    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [parentid,setparentid]=useState([])

  useEffect(() => {
      <Tree/>
  }, [parentid,setparentid])
  

  const handleParent=()=>{
      if(node.key.length===5)
      {
        setparentid([node.key[0],node.key.slice(0,3)])
      }
      else if(node.key.length===3)
      {
          setparentid([node.key[0],-1])
      }
      else{
          setparentid([])
      }
   console.log(parentid)
  }

  const handleChild=()=>{
    setChildVisiblity(!childVisible)
   if(node.children===undefined || node.children.length===0){alert('it has no child')}
  }

  const hasChild = node.children ? true : false;

  return (

    <li className="d-tree-node border-0">
      <div  className='head' onClick={handleChild} onMouseEnter={handleParent}>
        <div   >
          {node.label}
        </div>
      </div>
      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>

  );
};

export default Tree;