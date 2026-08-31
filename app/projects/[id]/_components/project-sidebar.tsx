import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProjectProps } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"

interface ProjectSidebarProps {
    project: ProjectProps
}

const ProjectSidebar = ({project}: ProjectSidebarProps) => (
    <Card className="pt-0">
        <Link
            href={project.link ?? project.github ?? '#'}
            target="_blank"
            className="relative aspect-video overflow-hidden"
        >
            <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="grayscale-50 hover:brightness-100 hover:grayscale-0 transition hover:scale-115 ease-in-out duration-800"
            />
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

export default ProjectSidebar