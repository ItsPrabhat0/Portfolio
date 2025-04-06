import Image from "next/image";
import Link from "next/link";
import About from "../about/page";
import Portfolio from "../portfolio/page";
import Resume from "../resume/page";
import Contact from "../contact/page";

export default function Home() {
  return (
    <>
    <div className="h-[100vh] flex flex-col sm:flex-row   bg-gradient-to-b from-blue-100 to-red-100">
    <div className="mx-5 w-1/2 flex items-end justify-center">
    <Image className=" object-contain" src='/prabhat.png' alt="prabhatImg" width={420} height={420}></Image>
    </div>
    <div className="m-5 px-5 w-1/2 text-black flex flex-col items-start justify-center">
      <div className="">
       <h1 className="text-3xl font-bold">Hello!</h1>
      <h1 className="text-3xl font-bold">I'M PRABHAT</h1>
      <p className="text-xl">Software Engineer, Full-Stack Developer,App Developer,Coder</p> 
      </div>
      <div>
        <button className="m-2 text-xl outline-2 outline-black rounded-lg p-2 ">My Portfolio</button>
        <button className="m-2 text-xl outline-2 outline-black rounded-lg p-2">Contact Me</button>
      </div>
      <div className="flex">
        <Link className="p-3" href="https://www.linkedin.com/in/itsprabhat00" target="_blank">
        <Image src="/linkedIn.png" alt="linkedInimg" width={40} height={40}/>
        </Link>
        <Link className="p-3" href="https://github.com/ItsPrabhat0" target="_blank">
        <Image src="/github.png" alt="githubimg" width={40} height={40} />
        </Link>
        <Link className="p-3" href="https://www.instagram.com/_prbht" target="_blank">
        <Image src="/instagram.png" alt="instagramimg" width={40} height={40}/>
        </Link>
      </div>
      

    </div>
   </div>
    <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
    
    </>
   
  );
}
