"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, BookOpen, CheckCircle2, DollarSign, Home, Lock, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/progress", label: "Business Roadmap", icon: CheckCircle2 },
  { href: "/reports", label: "Progress Updates", icon: BarChart3 },
  { href: "/funds", label: "Grants", icon: DollarSign },
  { href: "/equity", label: "Grant Terms", icon: Lock },
  { href: "/resources", label: "Resources", icon: BookOpen },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 z-40",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-foreground">Calabar</h1>
          <p className="text-xs text-muted-foreground mt-1">Grant Program</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm",
                pathname === href
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer info */}
        <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">Program Info</p>
          <p>Cohort: 2027-Q1</p>
          <p>Status: Active</p>
        </div>
      </aside>

      {/* Spacer for desktop */}
      <div className="hidden lg:block w-64" />
    </>
  )
}
