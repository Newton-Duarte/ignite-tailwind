'use client'

import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="text-zinc-500.hover:text-violet-700 group relative px-1 pb-4 text-sm font-medium outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        ></motion.div>
      )}
    </Tabs.Trigger>
  )
}
