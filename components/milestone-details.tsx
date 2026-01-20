"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

const milestoneData = {
  current: {
    name: "Growth Phase",
    description: "Expand your business operations, increase customer base, and demonstrate market viability",
    criteria: [
      { name: "Business premises/operations established", completed: true },
      { name: "Customer/client acquisition (20+ achieved)", completed: true },
      { name: "Revenue generation evidence", completed: false },
      { name: "Customer feedback & testimonials", completed: false },
      { name: "Marketing & outreach plan executed", completed: false },
    ],
    timeline: "Week 9-12 (Current: Day 3)",
    evidence: [
      { type: "Business Photos", link: "Premises/operations documentation" },
      { type: "Sales Records", link: "Revenue and transaction history" },
      { type: "Customer Feedback", link: "Testimonials and reviews" },
    ],
  },
}

export function MilestoneDetails() {
  const [showEvidenceForm, setShowEvidenceForm] = useState(false)
  const milestone = milestoneData.current
  const completedCriteria = milestone.criteria.filter((c) => c.completed).length

  return (
    <div className="space-y-6">
      {/* Current Milestone Card */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{milestone.name}</CardTitle>
            <CardDescription className="mt-2">{milestone.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Timeline */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Timeline</p>
            <div className="bg-secondary rounded-lg p-3">
              <p className="text-sm text-foreground">{milestone.timeline}</p>
            </div>
          </div>

          {/* Criteria Checklist */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-semibold text-foreground">Completion Criteria</p>
              <span className="text-xs font-medium text-primary">
                {completedCriteria}/{milestone.criteria.length}
              </span>
            </div>
            <div className="space-y-3">
              {milestone.criteria.map((criterion, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
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

          {/* Evidence Submission */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Proof of Work</p>
            <div className="space-y-2">
              {milestone.evidence.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.type}</p>
                    <p className="text-xs text-muted-foreground">{item.link}</p>
                  </div>
                  <button className="text-xs px-3 py-1 rounded bg-secondary text-foreground hover:bg-muted transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowEvidenceForm(!showEvidenceForm)}
              className="mt-4 w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {showEvidenceForm ? "Cancel" : "Upload Evidence"}
            </button>

            {showEvidenceForm && (
              <div className="mt-4 p-4 border border-border rounded-lg space-y-3 bg-secondary/50">
                <input
                  type="text"
                  placeholder="Evidence title"
                  className="w-full px-3 py-2 border border-border rounded text-sm bg-background"
                />
                <textarea
                  placeholder="Description and links"
                  className="w-full px-3 py-2 border border-border rounded text-sm bg-background h-24"
                />
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90">
                  Submit Evidence
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Progress Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Milestone Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Overall Completion</span>
              <span className="font-semibold text-primary">
                {Math.round((completedCriteria / milestone.criteria.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${(completedCriteria / milestone.criteria.length) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
