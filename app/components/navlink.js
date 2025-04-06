'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";



function Navlink({link}) {
    const route= usePathname();
    
  return (
    <Link className={`rounded-lg p-1 ${route==link.url && 'bg-black text-white'}`} href={link.url}>
        {link.title}
    </Link>
  )
}

export default Navlink