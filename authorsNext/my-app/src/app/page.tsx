import "./../app/home.scss"
import Link from "next/link"
export default function Home() {
  return (
    <>
    <div className="homeMain">
      <div className="navHome">
        <div className="title"><h1>AUTHORS</h1></div>
        <div className="list">
          <div className="listEl"> <Link className="link" href="/">Home</Link></div>
           <div className="listEl"><Link className="link" href="/pages/authors">AUTHORS</Link></div>
            <div className="listEL"><Link className="link" href="/pages/addauthors"> ADD AUTHORS</Link></div>
            
           
         
        </div>
      </div>
      <div className="titleHome">
        <h1>THIS IS HOME PAGE</h1>
      </div>
    </div>
    </>
  )
}
