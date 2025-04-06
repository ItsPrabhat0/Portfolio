import Image from "next/image";

function About() {
    return (
        <div className="h-[100vh] bg-gradient-to-b from-blue-100 to-red-100 text-black flex flex-col">
            <h1 className="  p-[6px] text-center text-2xl font-bold">ABOUT US</h1>
            <div className="flex  ">
                <div className=" w-1/2 flex items-center justify-end ">
                    <h2 className="text-2xl ">Hello,<br /> I'm Prabhat, a passionate full-stack developer.<br/>
                        With a love for coding and technology, I create impactful <br />
                        web solutions. Let's connect and explore the endless <br />
                        possibilities in the world of software development. <br />
                        Welcome to my portfolio! 👨‍💻✨</h2>
                </div>
                <div className=" w-1/2  flex items-end justify-center">
                    <Image src="/prabhat2.png" alt="prabhatImg" width={400} height={400} className="object-contain"/>
                </div>
            </div>


        </div>
    )
}

export default About