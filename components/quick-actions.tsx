"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const actions = [
  { href: "/reports", label: "Submit Progress Update", icon: "📊" },
  { href: "/progress", label: "View Business Roadmap", icon: "🎯" },
  { href: "/funds", label: "Request Grant Release", icon: "💰" },
  { href: "/resources", label: "Access Resources", icon: "📚" },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{action.icon}</span>
                <span className="text-sm font-medium text-foreground">{action.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
