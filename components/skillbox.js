import { jose, rubik } from "../app/fonts";
import { Card, Image, CardFooter, Tabs, Tab } from "@nextui-org/react";
import NextImage from 'next/image'
export default function SkillBox({items}) {
    return (
        <div>
            <div className="flex w-full flex-col justify-center">
                <Tabs aria-label=" Dynamic tabs" items={items} radius="lg" variant="bordered" className=" place-self-center">
            {
                (item)=>(
                    <Tab key={item.id} title={item.title}>
                        <div className=" gap-3 grid grid-cols-2 sm:grid-cols-4 ">
                        {item.skills.map((skill, index)=>(
                            <Card isFooterBlurred radius="lg" className=" border-none " key={index}>
                            <Image alt={skill.title} className=" object-cover" src={skill.src} key={skill.id} isZoomed/>
                            <CardFooter className=" justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className=" text-white/hover">
                                    {skill.title}
                                </p>
                            </CardFooter>
                            </Card>
                        ))}
                        </div>
                    </Tab>     
                )
            }
        </Tabs>
        </div>
        </div>)
}