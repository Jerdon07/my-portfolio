'use client'

import * as Icons from 'lucide-react'
import { LucideIcon } from "lucide-react"

export const getIcon = (name: string): LucideIcon =>
    (Icons[name as keyof typeof Icons] as LucideIcon) ?? Icons.HelpCircle