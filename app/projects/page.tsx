import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectProps, projects } from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "./_components/project-card"

export default function Projects() {

    return (
        <div className="flex flex-col justify-center items-center px-0">
            <div className="my-5 flex-0 text-center w-full md:w-2/3 space-y-4">
                <h1 className="text-2xl font-bold">My Personal and Team Projects</h1>
                <h3 className="text-zinc-400 leading-relaxed">A showcase of my personal and collaborative work.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 overflow-hidden flex-1 w-full md:w-[80%] items-stretch">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard 
                        key={project.id}
                        project={project} 
                    />
                ))}
            </div>
        </div>
    )
}
