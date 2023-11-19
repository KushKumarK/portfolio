'use client'
import SkillBox from "@/components/skillbox";

export default function About(){
    const skills = [
        {
            id:1,
            title:"AI & ML",
            skills: [
            {
                id:1,
                title:"Data Visualization",
                src:'/assets/da.jpg',
            },
            {
                id:2,
                title:"Data Analysis",
                src:"/assets/dv.jpg"
            },
            {
                id:3,
                title:"Data Cleaning",
                src:"/assets/dc.jpg"
            },
            {
                id:4,
                title:"Computer Vision",
                src:"/assets/cv.jpg"
            },
            {
                id:5,
                title:"Natural Language Processing",
                src:"/assets/nlp.jpg"
            }
        ]},
        {
            id:2,
            title:"Web & App Development",
            skills: [
            {
                id:1,
                title:"Web Designing",
                src:"/assets/wd.jpg"
            },
            {
                id:2,
                title:"Flutter",
                src:"/assets/flutter.jpg"
            },
            {
                id:3,
                title:"ReactJS",
                src:"/assets/react.jpg"
            },
            {
                id:4,
                title:"React Native",
                src:"/assets/rctntv.jpg"
            },
            {
                id:5,
                title:"App Designing on Figma",
                src:"/assets/figma.jpeg"
            }
        ]},
        {
            id:3,
            title:"Miscellanous",
            skills: [
            {
                id:1,
                title:"Server Creation and management",
                src:"/assets/scm.jpeg"
            },
            {
                id:2,
                title:"Database Management",
                src: "/assets/dbms.jpeg"
            },
            {
                id:3,
                title:"Linux Customization",
                src:"/assets/lc.jpeg"
            },
            {
                id:4,
                title:"Public Speaking",
                src:"/assets/ps.jpeg"
            },
            {
                id:5,
                title:"Leadership",
                src:"/assets/lead.jpeg"
            },
            {
                id:6,
                title:"Linux",
                src:"/assets/linux.jpeg"
            }]}
        ];
    return(
        <main className="flex min-h-screen flex-col items-center justify-start p-4">
            <div className="flex-col mt-4 justify-evenly p-8 w-screen top-0 ">
                <SkillBox items={skills}/>
            </div>
        </main>
    )
}