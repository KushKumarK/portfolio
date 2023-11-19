
import { jose } from '@/app/fonts'
import Link from 'next/link'

export default function NavButton ({ title }) {
    return (
        <div className='align-middle bg-green-100 rounded-full text-center text-slate-950 p-3 font-bold'>
            <Link href ={'/' + title.toLowerCase()} scroll={false} replace className={`${jose.className} font-extrabold`}>{title}</Link>
        </div>
    )
}