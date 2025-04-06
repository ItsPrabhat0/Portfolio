import Link from "next/link"
import Navlink from "./navlink"

const links=[
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/contact",title:"Contact"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/resume",title:"Resume"},
]
function Navbar() {
  return (
    <div className="fixed w-full h-[8vh] px-3 bg-blue-100 md:px-5 lg:px-20 flex items-center justify-between">
       <div className="text-2xl font-bold p-1 text-black" >
        <Link href="/"><h1>PRABHAT</h1></Link>
       </div>
       <div className="hidden sm:flex p-2  text-xl  flex-row items-center justify-center ">
        <div className=" mx-3 flex items-center justify-between text-black">
            {
                links.map((link,index)=>(
                    
                   <div key={index} className="flex items-center justify-between p-2" >
                    <Navlink link={link}/>
                    
                   </div>
                ))
            }
        
        </div>

        <div className="mx-2 outline-2 outline-black p-2 rounded-xl">
            <button className="text-black">Mode</button>
        </div>
       </div>
       <div className="flex flex-col sm:hidden cursor-pointer">
        <div className="h-1 w-10 m-1  rounded-lg bg-black"></div>
        <div className="h-1 w-10 m-1 rounded-lg bg-black"></div>
        <div className="h-1 w-10 m-1 rounded-lg bg-black"></div>
       </div>
    </div>
  )
}

export default Navbar