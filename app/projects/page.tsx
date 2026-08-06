import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    return (
        <div className="flex flex-col justify-center items-center px-4">
            <div className="my-5 flex-0 text-center w-full md:w-2/3 space-y-4">
                <h1 className="text-2xl font-bold">My Personal and Team Projects</h1>
                <h3 className="text-zinc-400 leading-relaxed">A showcase of my personal and collaborative work.</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 overflow-hidden flex-1 w-full md:w-[80%] items-stretch">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="block h-full">
                        <Card className="pt-0 cursor-pointer border h-full">
                            <div className="relative aspect-video bg-black/35">
                                <Image src={project.thumbnail} alt={project.title} fill />
                                <Badge className="absolute right-2 bottom-2 bg-card px-2 py-1 border-card">
                                    { project.badge }
                                </Badge>
                            </div>

                            <CardHeader>
                                <CardTitle>{ project.title }</CardTitle>
                                <CardDescription>{ project.subtitle }</CardDescription>
                                <CardAction><ArrowRight /></CardAction>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
