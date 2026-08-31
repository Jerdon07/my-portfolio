import { Banknote, BookOpenText, Cable, CalendarClock, ChartLine, FileInput, HeartHandshake, Layers, LucideIcon, LucideProps, Map, MapPinned, Shrub, Store, TrendingUp, UserKey, Warehouse, Zap } from "lucide-react";

export interface ProjectProps {
    id: number
    title: string
    subtitle: string
    description: string
    badge: string
    year: number
    thumbnail: string
    stack: {
            name: string
            color: string
        }[]
    mission: string
    role: string[]
    timeline: string
    link?: string
    github?: string
    features: {
        title: string
        description: string
        icon: LucideIcon
    }[]
    results?: {
        title: string
        description: string
        icon: LucideIcon
    }[]
    takeaways?: {
        title: string
        description: string
        icon: LucideIcon
    }[]
}

export const projects: ProjectProps[] = [
    {
        id: 1,
        title: 'Hrvst',
        subtitle: 'Vegetable Scheduling & Analytics for La Trinidad Vegetable Trading Post Farmers & Dealers',
        description: 'A specialized agriculture logistics and marketplace platform designed to streamline crop trading within the Cordillera region. Built to replace volatile, word-of-mouth scheduling, the platform synchronizes trading activities at the La Trinidad Vegetable Trading Post. By providing a symmetrical, single-parent posting system, Hrvst allows both farmers to broadcast upcoming supply and dealers to log current demand, stabilizing local supply chains through data-driven transparency.',
        badge: 'Capstone Project',
        year: 2026,
        thumbnail: '/hrvst.PNG',
        stack: [
            {
                name: 'Laravel',
                color: 'bg-orange-500/50 text-orange-500'
            }, {
                 name: 'Vue',
                 color: 'bg-emerald-500/50 text-emerald-500'
            }, {
                name: 'Inertia',
                color: 'bg-purple-500/50 text-purple-500'
            }, {
                name: 'PostgreSQL',
                color: 'bg-indigo-500/50 text-indigo-500'
            }, {
                name: 'Tailwind',
                color: 'bg-sky-500/50 text-sky-500'
            }, {
                name: 'Leaflet',
                color: 'bg-lime-500/50 text-lime-500'
            }, {
                name: 'Tanstack Table',
                color: 'bg-yellow-500/50 text-yellow-500'
            }, {
                name: 'Chart JS',
                color: 'bg-pink-500/50 text-pink-500'
            }, {
                name: 'Postman',
                color: 'bg-orange-500/50 text-orange-500'
            }, {
                name: 'ShadCN UI',
                color: 'bg-gray-500/50 text-gray-500'
            }
        ],
        mission: 'To empower the Cordillera agricultural community by replacing unpredictable trading habits with predictive, rolling lifecycle data—ensuring fair market visibility for farmers and reliable sourcing for dealers.',
        role: ['Solo Developer'],
        timeline: '6 Months Capstone Project',
        link: 'https://hrvst.laravel.cloud',
        github: 'https://github.com/Cresco-Team/Hrvst-v2',
        features: [
            {
                title: 'Symmetrical Unified Marketplace',
                description: 'Utilizes a shared parent posting structure that handles both supply and demand symmetrically, ensuring a balanced, single-source-of-truth architecture.',
                icon: Store,
            }, {
                title: 'Rolling Yield Forecasts',
                description: 'Replaces restrictive static harvest dates with a flexible, monthly rolling lifecycle model that adapts seamlessly to the natural unpredictability of agricultural yields.',
                icon: CalendarClock
            }, {
                title: 'Geospatial Farmer Clustering',
                description: 'Integrates interactive mapping and marker clustering to map out farmer locations, optimizing regional logistics and pick-up routing for dealers.',
                icon: MapPinned
            }, {
                title: 'Real-Time Price Management',
                description: 'Provides immediate visibility into shifting market rates at the La Trinidad Trading Post, allowing users to make informed, data-driven pricing decisions.',
                icon: Banknote
            }
        ],
        results: [
            {
                title: 'Architectural Efficiency',
                description: 'Designed and deployed a highly scalable decoupled architecture using a lean Service/Action pattern in Laravel 13, keeping controllers exceptionally thin and maintainable.',
                icon: Zap
            }, {
                title: 'Fluid User Experience',
                description: 'Built a high-performance, SPA-like frontend using Vue 3 (Composition API) and Tailwind CSS v4, bound seamlessly to the backend via Inertia.js v2 for rapid data synchronization without complex state management.',
                icon: HeartHandshake
            }, {
                title: 'Optimized Spatial Data',
                description: 'Handled heavy regional coordinate datasets efficiently on the frontend using Leaflet.js and marker clustering, preventing UI lag during map interactions.',
                icon: Map
            }
        ],
        takeaways: [
            {
                title: 'Software Must Flex for Real Life',
                description: 'Shifting from strict static harvest deadlines to a monthly forecast model proved that software architecture must bend to real-world operational realities—like weather and farming cycles—rather than forcing users into rigid digital boxes.',
                icon: Shrub
            }, {
                title: 'Domain Logic Belongs in Actions',
                description: 'Keeping the backend maintainable over a long development cycle heavily depended on isolating business logic into single-responsibility Action layers, proving that strict architectural patterns pay off as project scope scales.',
                icon: Layers
            }, {
                title: "State Sharing Doesn't Need Over-Engineering",
                description: 'Leveraging the Inertia.js bridge allowed for rapid data flow between Laravel and Vue 3 devtools without the overhead of managing a separate REST API or heavy global frontend state stores.',
                icon: Cable
            }
        ],

    },

    {
        id: 2,
        title: 'ZircuVia',
        subtitle: 'Circular Tourism Platform for Puerto Princesa City, Palawan, Philippines.',
        description: "Discover sustainable businesses, track your environmental fee payments, and join exciting events and activities, while making a better environmentally conscious choice along the way.",
        badge: 'Internship Project',
        year: 2026,
        thumbnail: '/zircuvia.png',
        stack: [
            {
                name: 'Next JS',
                color: 'bg-gray-500/50 text-gray-500',
            }, {
                name: 'React JS',
                color: 'bg-blue-500/50 text-blue-500',
            }, {
                name: 'MUI',
                color: 'bg-blue-500/50 text-blue-500',
            }, {
                name: 'Leaflet',
                color: 'bg-lime-500/50 text-lime-500',
            }, {
                name: 'Tailwind',
                color: 'bg-sky-500/50 text-sky-500',
            }
        ],
        mission: "We connect you with businesses practicing sustainable and eco-friendly practices, help you track your environmental payments, and reward you for making choices that benefit our planet. Together, we're building a community committed to zero-waste living and environmental responsibility.",
        role: ['Quality Assurance Intern'],
        timeline: '3 Months Internship Project',
        link: 'https://mobile.zircuvia.com',
        features: [
            {
                title: 'Discover Eco-Businesses',
                description: 'Explore a categorized list of options: Hotels, Restaurants, Tours, Artisans, and Events, all at your fingertips. Enjoy peace of mind with our eco-friendly markers, certified by local authorities. Easily access contact information, locations, and reviews to enhance your travel experience.',
                icon: Map
            }, {
                title: 'Locate Your Next Destination',
                description: "Experience the ease of our tourist app's embedded map view! Users can quickly locate partner businesses on the map, simplifying navigation. With a link to Google Maps for detailed directions, exploring is a cinch. Plus, our app works offline for basic browsing, so you can access essential info anytime, anywhere.",
                icon: MapPinned
            }, {
                title: 'Events & Promotions',
                description: 'Zircuvia shows events and promotions to keep you updated on the exciting activities and deals that enhance your travel experience. This helps you plan your itinerary effectively and encourages you to explore local attractions, making your visits even more memorable.',
                icon: CalendarClock
            }, {
                title: 'Cashless Environmental Fee Payments',
                description: 'Zircuvia allows cashless payments for environmental fees, simplifying the collection process for the city and improving user experience. Tourists can pay fees easily, making their visit smoother and encouraging more users to adopt the app, benefiting both the city and visitors.',
                icon: Banknote
            }
        ],
        results: [
            {
                title: 'Improved QA Processes',
                description: 'Implemented structured QA processes, including test case creation, bug tracking, and regression testing, leading to a 30% reduction in post-release defects.',
                icon: Zap
            }, {
                title: 'Enhanced User Experience',
                description: 'Collaborated with the development team to identify and resolve usability issues, resulting in a 25% increase in user satisfaction scores based on post-release surveys.',
                icon: HeartHandshake
            }
        ],
        takeaways: [
            {
                title: 'Quality Assurance is a Team Effort',
                description: 'Collaborating with developers, designers, and stakeholders is crucial for effective QA. Clear communication and shared understanding of project goals ensure that testing aligns with user expectations and business objectives.',
                icon: HeartHandshake
            }, {
                title: 'Automation Enhances Efficiency',
                description: 'Implementing automated testing tools and scripts can significantly reduce manual testing time, allowing the QA team to focus on more complex scenarios and edge cases, ultimately improving overall product quality.',
                icon: Zap
            }
        ]
    },

    {
        id: 3,
        title: 'Cached',
        subtitle: 'Centralized Inventory & Warehouse Management platform for 12+ Different Roles',
        description: 'The Inventory & Warehouse Management System (IWMS) is a web-based business management application built to help organizations efficiently manage products, inventory, warehouses, purchasing, receiving, sales, and stock movements from a single platform.',
        badge: 'Personal Project',
        year: 2026,
        thumbnail: '/cached.png',
        stack: [
            {
                name: 'Laravel',
                color: 'bg-orange-500/50 text-orange-500'
            }, {
                name: 'Filament',
                color: 'bg-orange-400/50 text-orange-400'
            },
        ],
        mission: 'To replace manual processes such as paper records and spreadsheets with a centralized, real-time inventory management solution.',
        role: ['Solo Developer'],
        timeline: '4 Months Project',
        github: 'https://github.com/Jerdon07/cached',
        features: [
            {
                title: '12+ Roles',
                description: 'Role based application for difference access.',
                icon: UserKey
            }, {
                title: 'Catalog',
                description: 'Manages products, categories, brands, units.',
                icon: BookOpenText
            }, {
                title: 'Inventory & Warehousing',
                description: 'Movements, adjustments, transfers, and Multi-location stock tracking.',
                icon: Warehouse
            }, {
                title: 'Purchasing',
                description: 'Manages orders, approvals, goods receiving.',
                icon: FileInput
            }, {
                title: 'Sales',
                description: 'Manages Customer orders and fulfillment.',
                icon: TrendingUp
            }, {
                title: 'Reports',
                description: 'Checks for Valuation, low stock, activity.',
                icon: ChartLine
            },
        ]
    }
]