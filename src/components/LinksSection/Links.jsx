import LinkComponent from "./LinkComponent"
import "./links.css"
import Git from "../../assets/Icon.png"
import Slack from "../../assets/slack.png"

function Links({slackName}) {
    const links = [
        {name:"Twitter Link",id:"",address:"https://twitter.com/ibkay998",title:"",type:"a"},
        {name:"Zuri Team",id:"btn__zuri",address:"https://training.zuri.team/",title:"",type:"a"},
        {name:"Zuri Books",id:"books",address:"http://books.zuri.team",title:"this is where you find books about design and coding",type:"a"},
        {name:"Python Books",id:"book__python",address:`https://books.zuri.team/python-for-beginners?ref_id=${slackName}`,title:"",type:"a"},
        {name:"Background Check for Coders",id:"pitch",address:"https://background.zuri.team",title:"",type:"a"},
        {name:"Design Books",id:"book__design",address:"https://books.zuri.team/design-rules",title:"",type:"a"},
        {name:"Contact",id:"contact",address:"/contact",title:"",type:"link"},
]

  return (
    <div className="links">
        {links.map((link)=>(
            <LinkComponent name={link.name} id={link.id} address={link.address} title={link.title} type={link.type} />
        ))}
        <div className="social__links">
            <a href="https://slack.com/U029AMRJN2C"><img src={Slack} alt="slack"/></a>
            <a href="https://github.com/ibkay998"><img src={Git} alt="git"/></a>
        </div>
    </div>
  )
}

export default Links
