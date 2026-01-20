"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Lock, AlertCircle } from "lucide-react"
import { useState } from "react"

const tranches = [
  {
    name: "Business Setup (30%)",
    amount: 1500000,
    status: "released",
    releaseDate: "Jan 2, 2027",
    criteria: [
      { name: "Program enrollment completed", completed: true },
      { name: "Beneficiary onboarding", completed: true },
      { name: "Business registration/CAC", completed: true },
    ],
    usage: [
      { category: "Equipment & Supplies", amount: 700000 },
      { category: "Premises/Workspace Setup", amount: 500000 },
      { category: "Initial Operations", amount: 300000 },
    ],
  },
  {
    name: "Operations Phase (40%)",
    amount: 2000000,
    status: "pending",
    releaseDate: "Expected: Feb 15, 2027",
    criteria: [
      { name: "Business premises operational", completed: true },
      { name: "Initial customers/clients acquired (20+)", completed: false },
      { name: "Revenue generation evidence", completed: false },
      { name: "Submit first monthly progress report", completed: false },
    ],
    usage: null,
  },
  {
    name: "Growth Phase (30%)",
    amount: 1500000,
    status: "locked",
    releaseDate: "Expected: Apr 1, 2027",
    criteria: [
      { name: "Sustained revenue generation demonstrated", completed: false },
      { name: "Customer retention/repeat business", completed: false },
      { name: "Market expansion plan submitted", completed: false },
    ],
    usage: null,
  },
]

export function FundTranches() {
  const [expandedTrancheId, setExpandedTrancheId] = useState(0)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Grant Tranches</h3>

      {tranches.map((tranche, idx) => (
        <Card key={idx} className="overflow-hidden">
          <button
            onClick={() => setExpandedTrancheId(expandedTrancheId === idx ? -1 : idx)}
            className="w-full p-6 flex items-start justify-between hover:bg-secondary/50 transition-colors text-left"
          >
            <div className="flex items-start gap-4 flex-1">
              {tranche.status === "released" && <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />}
              {tranche.status === "pending" && <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />}
              {tranche.status === "locked" && <Lock className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />}

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">{tranche.name}</p>
                <p className="text-sm text-muted-foreground mt-1">Amount: ₦{(tranche.amount / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-muted-foreground">{tranche.releaseDate}</p>
              </div>
            </div>

            <span
              className={`text-xs font-semibold px-3 py-1 rounded whitespace-nowrap ml-4 ${tranche.status === "released"
                ? "bg-green-50 text-green-700"
                : tranche.status === "pending"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-gray-100 text-gray-600"
                }`}
            >
              {tranche.status.charAt(0).toUpperCase() + tranche.status.slice(1)}
            </span>
          </button>

          {/* Expanded Content */}
          {expandedTrancheId === idx && (
            <div className="border-t border-border p-6 bg-secondary/30 space-y-6">
              {/* Eligibility Criteria */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Eligibility Criteria</h4>
                <div className="space-y-2">
                  {tranche.criteria.map((criterion, i) => (
                    <div key={i} className="flex items-center gap-3 p-2">
                      {criterion.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                      )}
                      <span className={criterion.completed ? "text-foreground" : "text-muted-foreground"}>
                        {criterion.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fund Usage (if released) */}
              {tranche.usage && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Fund Utilization</h4>
                  <div className="space-y-2">
                    {tranche.usage.map((usage, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span className="text-sm text-foreground">{usage.category}</span>
                        <span className="text-sm font-medium text-primary">₦{(usage.amount / 1000).toFixed(0)}K</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              {tranche.status === "pending" && (
                <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Request Grant Release
                </button>
              )}

              {tranche.status === "locked" && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Criteria not yet met</p>
                    <p className="text-xs text-amber-700 mt-1">Complete the operations phase to unlock this tranche</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
