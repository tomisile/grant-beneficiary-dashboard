"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FundAllocation() {
  const totalAllocation = 5000000
  const funds = {
    released: 1500000,
    pending: 2000000,
    locked: 1500000,
  }

  const fundChart = [
    {
      label: "Released",
      amount: funds.released,
      percent: (funds.released / totalAllocation) * 100,
      color: "bg-primary",
      status: "released",
    },
    {
      label: "Pending",
      amount: funds.pending,
      percent: (funds.pending / totalAllocation) * 100,
      color: "bg-amber-500",
      status: "pending",
    },
    {
      label: "Locked",
      amount: funds.locked,
      percent: (funds.locked / totalAllocation) * 100,
      color: "bg-muted",
      status: "locked",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Grant Allocation</CardTitle>
        <CardDescription>Your ₦5,000,000 grant support split across three tranches</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Main allocation visualization */}
        <div>
          <div className="mb-4 grid grid-cols-3 gap-4">
            {fundChart.map((fund) => (
              <div key={fund.label} className="text-center">
                <p className="text-2xl font-bold text-foreground">₦{(fund.amount / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-muted-foreground mt-1">{fund.label}</p>
              </div>
            ))}
          </div>

          {/* Stacked bar */}
          <div className="flex h-12 rounded-lg overflow-hidden shadow-sm">
            {fundChart.map((fund) => (
              <div
                key={fund.label}
                className={`${fund.color} flex items-center justify-center text-white text-xs font-semibold`}
                style={{ width: `${fund.percent}%` }}
              >
                {fund.percent > 15 && fund.label}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6">
            {fundChart.map((fund) => (
              <div key={fund.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${fund.color}`} />
                <span className="text-sm text-muted-foreground">
                  {fund.label}: {fund.percent.toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
