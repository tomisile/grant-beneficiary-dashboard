"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const updates = [
  { date: "Today", title: "Growth Phase Milestone Activated", description: "You have progressed to the Growth Phase stage" },
  {
    date: "2 days ago",
    title: "Mentor Check-in Scheduled",
    description: "Monthly mentorship review scheduled for Jan 20",
  },
  {
    date: "5 days ago",
    title: "Progress Update Approved",
    description: "Week 3 report reviewed and approved by program officers",
  },
  {
    date: "1 week ago",
    title: "Resource Training Access",
    description: "You now have access to financial management and marketing courses",
  },
]

export function RecentUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Updates</CardTitle>
        <CardDescription>Your latest program activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, i) => (
            <div key={i} className={`pb-4 ${i !== updates.length - 1 ? "border-b border-border" : ""}`}>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{update.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{update.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
