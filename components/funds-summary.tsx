"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FundsSummary() {
  const funds = {
    total: 5000000,
    released: 1500000,
    pending: 2000000,
    locked: 1500000,
  }

  const fundTranches = [
    { name: "Business Setup (30%)", amount: 1500000, status: "released" },
    { name: "Operations (40%)", amount: 2000000, status: "pending" },
    { name: "Growth (30%)", amount: 1500000, status: "locked" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grant Allocation</CardTitle>
        <CardDescription>Total Grant Support: ₦{(funds.total / 1000000).toFixed(1)}M</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Fund breakdown */}
        <div className="space-y-3">
          {fundTranches.map((tranche) => (
            <div key={tranche.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground">{tranche.name}</span>
                <span
                  className={
                    tranche.status === "released"
                      ? "text-primary font-semibold"
                      : tranche.status === "pending"
                        ? "text-amber-600"
                        : "text-muted-foreground"
                  }
                >
                  ₦{(tranche.amount / 1000000).toFixed(1)}M
                </span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className={
                    tranche.status === "released"
                      ? "h-full bg-primary"
                      : tranche.status === "pending"
                        ? "h-full bg-amber-500"
                        : "h-full bg-muted"
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <span className="text-xs text-muted-foreground capitalize">{tranche.status}</span>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
          View Fund Details →
        </button>
      </CardContent>
    </Card>
  )
}
