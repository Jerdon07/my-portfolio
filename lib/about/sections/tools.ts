import { Server, MonitorSmartphone, Workflow, LucideIcon } from "lucide-react"

export interface ToolProps {
    id: number
    title: string
    description: string
    icon: LucideIcon
    tools: {
        name: string
        color: string
        level: "learning" | "proficient" | "advanced"
    }[]
}

export const tools: ToolProps[] = [
    {
        id: 1,
        title: "Backend & Core Architecture",
        description: "Building structured server-side logic, ensuring data integrity, and applying clean architectural patterns to keep systems maintainable.",
        icon: Server,
        tools: [{
            name: "Laravel 13",
            color: "bg-orange-500/50",
            level: "proficient",
        }, {
            name: "Next JS",
            color: "bg-black text-white",
            level: "learning",
        }, {
            name: "Supabase",
            color: "bg-green-500/50",
            level: "learning",
        }]
    }, {
        id: 2,
        title: "Frontend & Reactive UI",
        description: "Developing responsive, component-driven user interfaces and managing application state across single-page architectures.",
        icon: MonitorSmartphone,
        tools: [{
            name: "Vue 3",
            color: "bg-emerald-500/50",
            level: "proficient",
        }, {
            name: "React TSX",
            color: "bg-cyan-500/50",
            level: "proficient",
        }, {
            name: "Inertia JS",
            color: "bg-purple-500/50",
            level: "proficient",
        }, {
            name: "TypeScript",
            color: "bg-blue-500/50",
            level: "proficient",
        }, {
            name: "Tailwind CSS",
            color: "bg-sky-500/50",
            level: "proficient",
        }]
    }, {
        id: 3,
        title: "Tooling & Workflow",
        description: "Optimizing the local development environment for quick iterations using lightweight tools, version control, and testing frameworks.",
        icon: Workflow,
        tools: [{
            name: "Git",
            color: "bg-black",
            level: "proficient",
        }, {
            name: "Bun",
            color: "bg-pink-500/50",
            level: "learning",
        }, {
            name: "Composer",
            color: "bg-taupe-500/50",
            level: "proficient",
        }, {
            name: "Postman",
            color: "bg-amber-500/50",
            level: "learning",
        }, {
            name: "Pest",
            color: "bg-teal-500/50",
            level: "proficient",
        }]
    }
]