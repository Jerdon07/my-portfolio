import { useEffect, useRef, useState } from "react"

const useActiveSection = <T extends { title: string }>(sections: T[]) => {
    const [activeId, setActiveId] = useState(sections[0].title ?? '')
    const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({})

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sections.forEach((item) => {
            const element = itemRefs.current[item.title]
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id: string) => {
        const element = itemRefs.current[id]

        if (element) {
            element.scrollIntoView()
        }
    }

    return { activeId, itemRefs, scrollToSection };
}

export default useActiveSection;