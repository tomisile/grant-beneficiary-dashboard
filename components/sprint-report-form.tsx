"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function SprintReportForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Progress Update - Week 5</CardTitle>
        <CardDescription>Share your business activities, challenges, and evidence of progress</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Update */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Business Activity Summary</label>
            <textarea
              placeholder="What business activities did you complete this week? Describe customers served, products/services delivered, milestones achieved, challenges faced, and plans for next week."
              className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              rows={5}
              defaultValue="This week, we served 8 new customers and generated ₦120,000 in revenue. Launched our social media marketing campaign which reached 500+ people. Faced a supply delay for materials but found an alternative supplier. Plan to expand to 2 new locations next week."
            />
          </div>

          {/* Business/Revenue Link */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Business Resource Link (Optional)</label>
            <input
              type="url"
              placeholder="Link to sales record, website, social media, or business documentation"
              className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              defaultValue="https://instagram.com/mybusiness_ng"
            />
          </div>

          {/* File Uploads */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Evidence Upload (Photos, Receipts, Sales Records, Customer Feedback)
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-secondary transition-colors">
              <input type="file" multiple className="hidden" id="proof-upload" />
              <label htmlFor="proof-upload" className="cursor-pointer block">
                <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB each</p>
              </label>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">product-photo-week5.jpg</p>
                  <p className="text-xs text-muted-foreground">1.8 MB</p>
                </div>
                <button type="button" className="text-xs text-destructive hover:underline">
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">customer-receipts.pdf</p>
                  <p className="text-xs text-muted-foreground">2.1 MB</p>
                </div>
                <button type="button" className="text-xs text-destructive hover:underline">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Business Metrics */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              This Week's Key Metrics
            </label>
            <div className="space-y-2">
              {["Customers served", "Revenue generated", "Marketing reach"].map((metric, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <input type="checkbox" defaultChecked={i === 0} className="w-4 h-4 rounded" />
                  <label className="text-sm text-foreground cursor-pointer flex-1">{metric}</label>
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add custom metric"
              className="w-full mt-2 px-4 py-2 border border-border rounded-lg text-sm bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Challenges */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Challenges & Support Needs</label>
            <textarea
              placeholder="What challenges did you face? Do you need support with supplies, logistics, marketing, or other areas?"
              className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              rows={3}
              defaultValue="Supply chain delay from main distributor. Need guidance on scaling to new markets. Looking for mentorship on financial management."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Submit Sprint Report
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-green-900">Update submitted successfully!</p>
                <p className="text-xs text-green-700 mt-1">
                  Your progress has been recorded. Program officers will review within 24 hours.
                </p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
