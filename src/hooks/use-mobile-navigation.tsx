"use client"

import { useEffect, useRef } from "react"

const useMobileNavigation = ( activeId: string) => {
    const mobileNav = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (!mobileNav.current) return

        const activeButton = mobileNav.current.querySelector<HTMLElement>('[data-active="true"]')

        activeButton?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        })
    }, [activeId])

    return mobileNav
}

export default useMobileNavigation