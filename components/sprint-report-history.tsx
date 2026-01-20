"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock } from "lucide-react"

const reports = [
  {
    week: "Week 4",
    date: "Jan 12, 2027",
    status: "approved",
    achievements: 3,
  },
  {
    week: "Week 3",
    date: "Jan 5, 2027",
    status: "approved",
    achievements: 3,
  },
  {
    week: "Week 2",
    date: "Dec 29, 2023",
    status: "pending",
    achievements: 2,
  },
  {
    week: "Week 1",
    date: "Dec 22, 2023",
    status: "approved",
    achievements: 3,
  },
]

export function SprintReportHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Submission History</CardTitle>
        <CardDescription>Past progress updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reports.map((report, i) => (
            <div
              key={i}
              className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">{report.week}</p>
                  <p className="text-xs text-muted-foreground">{report.date}</p>
                </div>
                {report.status === "approved" ? (
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                ) : (
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{report.achievements} updates</span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${report.status === "approved" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                    }`}
                >
                  {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <p className="text-xs font-semibold text-foreground mb-2">📊 Stats</p>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>Total Updates: 4</p>
            <p>Approved: 3</p>
            <p>Pending: 1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
