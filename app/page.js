
import Image from 'next/image'
import NavBar from '@/components/navbar'
import { jose, rubik } from './fonts'
import mehome from '/public/assets/me1.png'

export default function Home() {
  return (
    <><main className="flex min-h-screen flex-col ">
      <div className='flex flex-col absolute z-30 justify-start left-0 h-screen top-0'>
      <div className='w-screen flex justify-start pl-3'>
        <div className={`${rubik.className} text-[500px] font-extrabold `}>K</div>
      <div className={`${rubik.className} text-9xl font-extrabold flex flex-col text-left justify-center`}>
        <div>ush</div>
        <div>umar</div>
        <div>ushwaha</div>
        <div className=' absolute -z-10 top-0 right-0'>
      <div className=' relative h-screen'>
        <Image priority src={mehome} alt='MyImg1' className="object-cover" ></Image>
        </div>
    </div>
      </div>
    </div>
    </div>
    
    
    </main></>
  )
}
