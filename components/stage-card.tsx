"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lock } from "lucide-react"

const stages = [
  { name: "Business Setup", completed: true },
  { name: "Initial Launch", completed: true },
  { name: "Growth Phase", completed: false, current: true },
  { name: "Scale & Sustainability", completed: false },
]

export function StageCard() {
  const progressPercent = (stages.filter((s) => s.completed).length / stages.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Venture Progress</CardTitle>
        <CardDescription>Your business development journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">{Math.round(progressPercent)}% Complete</span>
            <span className="text-xs text-muted-foreground">
              {stages.filter((s) => s.completed).length}/{stages.length}
            </span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Stage indicators */}
        <div className="space-y-3">
          {stages.map((stage, i) => (
            <div key={stage.name} className="flex items-center gap-3">
              {stage.completed ? (
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              ) : stage.current ? (
                <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0" />
              ) : (
                <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
              <span className={stage.current ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {stage.name}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
          View Milestones →
        </button>
      </CardContent>
    </Card>
  )
}
