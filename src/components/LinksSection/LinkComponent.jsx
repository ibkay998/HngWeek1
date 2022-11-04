import "./link_component.css"
import { Link } from "react-router-dom";

function LinkComponent({name,id,address,title,type}) {

  return (
    <div className="link__component">
      {type === "a" ? (
        <a id={`${id}`} title={`${title ? title : ""}`} href={`${address}`} target="__blanck">{name}</a>
      ):(<Link id={`${id}`} title={`${title ? title : ""}`} to={`${address}`}>{name}</Link>)}  
    </div>
  )
}

export default LinkComponent
