'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProjectProps } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ProjectSidebarProps {
    project: ProjectProps
}

const ProjectSidebar = ({project}: ProjectSidebarProps) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isHovered, setIsHovered] = useState(false)

    const images = project.images && project.images.length > 0 
        ? project.images 
        : project.thumbnail ? [project.thumbnail] : [];

    useEffect(() => {
        if (images.length <= 1 || isHovered) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [images.length, isHovered])

    return (
        <Card className="pt-0">
            <Link
                href={project.link ?? project.github ?? '#'}
                target="_blank"
                className="relative aspect-video overflow-hidden"
            >
               <div
                    className="relative w-full h-full overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    {images.map((src, index) => (
                        <Image
                        key={src}
                        src={src}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className={`object-cover grayscale-50 hover:brightness-100 hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        priority={index === 0} // Load the first image immediately
                        />
                    ))}
                    </div>
            </Link>

            <CardHeader>
                <CardTitle>
                    {project.title}
                </CardTitle>
                
                <CardDescription className="space-x-2">
                    {project.stack.map((stack) => (
                        <Badge
                            key={stack.name}
                            className={`
                                ${stack.color}
                                text-foreground px-1
                            `}
                        >
                            {stack.name}
                        </Badge>
                    ))}
                </CardDescription>

                {project.github && (
                    <CardAction>
                        <Link
                            href={project.github}
                            target="_blank"
                        >
                            <i className="devicon-github-original white text-2xl" />
                        </Link>
                    </CardAction>
                )}
            </CardHeader>

            <CardContent className="space-y-4">
                <Separator />

                {/* Role */}
                <div>
                    <span className="text-xs italic">
                        Role:
                    </span>

                    <p>
                        {project.role}
                    </p>
                </div>

                {/* Year and Timeline */}
                <div className="flex space-x-4">
                    {/* Year */}
                    <div>
                        <span className="text-xs italic">
                            Year:
                        </span>
                        <p>
                            {project.year}
                        </p>
                    </div>

                    <Separator orientation="vertical" />

                    {/* Timeline */}
                    <div>
                        <span className="text-xs italic">
                            Timeline:
                        </span>
                        <p>
                            {project.timeline}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectSidebar