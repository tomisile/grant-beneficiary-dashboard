"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

const complianceItems = [
  {
    title: "Business Registration (CAC)",
    status: "completed",
    dueDate: null,
  },
  {
    title: "Grant Agreement Signed",
    status: "completed",
    dueDate: null,
  },
  {
    title: "Tax Registration (TIN)",
    status: "in-progress",
    dueDate: "Feb 15, 2027",
  },
  {
    title: "Bank Account Setup",
    status: "completed",
    dueDate: null,
  },
  {
    title: "Local Operation Pledge",
    status: "pending",
    dueDate: "Mar 1, 2027",
  },
]

export function ComplianceStatus() {
  const completedCount = complianceItems.filter((i) => i.status === "completed").length
  const completionPercent = (completedCount / complianceItems.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Grant Compliance</CardTitle>
        <CardDescription>Required documents & deadlines</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-foreground">Overall Compliance</p>
            <span className="text-xs font-bold text-primary">{Math.round(completionPercent)}%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${completionPercent}%` }} />
          </div>
        </div>

        {/* Compliance Items */}
        <div className="space-y-2">
          {complianceItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="pt-0.5">
                {item.status === "completed" && <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />}
                {item.status === "in-progress" && <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />}
                {item.status === "pending" && <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                {item.dueDate && <p className="text-xs text-muted-foreground mt-0.5">Due: {item.dueDate}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Alert */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs font-semibold text-amber-900">⚠️ Action Required</p>
          <p className="text-xs text-amber-700 mt-1">Local Operation Pledge due Mar 1. Submit document.</p>
        </div>
      </CardContent>
    </Card>
  )
}
