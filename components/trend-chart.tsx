"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TrendChart() {
  const data = [
    { week: "W1", revenue: 20, customers: 10, operations: 15 },
    { week: "W2", revenue: 35, customers: 25, operations: 30 },
    { week: "W3", revenue: 48, customers: 40, operations: 45 },
    { week: "W4", revenue: 60, customers: 55, operations: 58 },
    { week: "W5", revenue: 72, customers: 68, operations: 70 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Growth Trend</CardTitle>
        <CardDescription>Revenue, customers, and operations growth</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 flex items-end justify-between gap-2 px-2">
          {data.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex gap-0.5 items-end justify-center" style={{ height: "120px" }}>
                <div className="w-1 rounded-t bg-primary/70 transition-all" style={{ height: `${d.revenue}%` }} />
                <div className="w-1 rounded-t bg-primary transition-all" style={{ height: `${d.customers}%` }} />
                <div className="w-1 rounded-t bg-primary/50 transition-all" style={{ height: `${d.operations}%` }} />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{d.week}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/70" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="text-muted-foreground">Operations</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
