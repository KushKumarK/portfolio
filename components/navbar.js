import Image from "next/image"
import NavButton from '@/components/button'
import klogo from '../public/assets/k2.svg'
import Link from 'next/link'
import { jose } from "@/app/fonts"
export default function NavBar(){
    return (
        <nav className={[jose.className, 'align-middle flex justify-around w-screen p-4 rounded-lg sticky top-0 z-50']}>
        <div>
            <Link href = "/" scroll={true}>
                <Image priority src={klogo} alt='Logo' height={50} width={50}></Image>
            </Link>
        </div>
        <NavButton title="CONTACT"/>
        <NavButton title="SKILLS"/>
        <NavButton title="CERTIFICATIONS"/>
        <NavButton title="PREVIOUS WORK"/>
      </nav>
    )
}