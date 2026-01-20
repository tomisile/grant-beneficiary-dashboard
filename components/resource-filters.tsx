"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const categories = [
  { name: "All Resources", count: 48 },
  { name: "Business Skills", count: 20 },
  { name: "Marketing", count: 12 },
  { name: "Legal & Compliance", count: 8 },
  { name: "Mentorship", count: 5 },
  { name: "Financial Management", count: 3 },
]

const types = ["Tutorial", "Course", "Template", "Tool"]

export function ResourceFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All Resources")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Category</p>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.name
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <div className="flex justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs opacity-70">{cat.count}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Resource Type */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Type</p>
          <div className="space-y-2">
            {types.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTypes([...selectedTypes, type])
                    } else {
                      setSelectedTypes(selectedTypes.filter((t) => t !== type))
                    }
                  }}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-sm text-foreground group-hover:text-primary">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSelectedCategory("All Resources")
            setSelectedTypes([])
          }}
          className="w-full text-sm px-3 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Clear Filters
        </button>
      </CardContent>
    </Card>
  )
}
