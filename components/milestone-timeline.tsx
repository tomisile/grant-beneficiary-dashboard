"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lock } from "lucide-react"

const milestones = [
  {
    id: 1,
    name: "Business Setup",
    status: "completed",
    date: "Week 0-4",
    fundUnlock: "30%",
  },
  {
    id: 2,
    name: "Initial Launch",
    status: "completed",
    date: "Week 5-8",
    fundUnlock: "40%",
  },
  {
    id: 3,
    name: "Growth Phase",
    status: "current",
    date: "Week 9-12",
    fundUnlock: "Partial",
  },
  {
    id: 4,
    name: "Scale & Sustainability",
    status: "locked",
    date: "Week 13-16",
    fundUnlock: "30%",
  },
]

export function MilestoneTimeline() {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Stages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {milestones.map((milestone, i) => (
            <div key={milestone.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                {milestone.status === "completed" && <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />}
                {milestone.status === "current" && (
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                )}
                {milestone.status === "locked" && <Lock className="w-6 h-6 text-muted-foreground flex-shrink-0" />}
                {i < milestones.length - 1 && (
                  <div className={`w-1 h-8 ${milestone.status === "completed" ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
              <div className="flex-1 pb-4">
                <p className="font-semibold text-foreground">{milestone.name}</p>
                <p className="text-xs text-muted-foreground">{milestone.date}</p>
                <p className="text-xs text-primary font-medium mt-1">Unlocks: {milestone.fundUnlock}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
