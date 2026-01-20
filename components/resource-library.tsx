"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Code, Users, Zap } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Entrepreneurship Fundamentals",
    category: "Business Skills",
    type: "Course",
    icon: Zap,
    description: "Essential principles for starting and managing any type of business venture.",
    duration: "8 hours",
    instructor: "Business Institute",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Financial Management for Entrepreneurs",
    category: "Business Skills",
    type: "Tutorial",
    icon: Zap,
    description: "Learn how to manage cash flow, budgeting, bookkeeping, and financial planning for your business.",
    duration: "6 hours",
    instructor: "Business Coach Pro",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Marketing Your Business",
    category: "Marketing",
    type: "Course",
    icon: BookOpen,
    description: "Digital and traditional marketing strategies to grow your customer base and sales.",
    duration: "10 hours",
    instructor: "Digital Growth Lab",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Mentor Matchmaking Program",
    category: "Mentorship",
    type: "Tool",
    icon: Users,
    description: "Connect with experienced entrepreneurs and business mentors for guidance and support.",
    duration: "Ongoing",
    instructor: "YTEI Program",
    level: "All Levels",
  },
  {
    id: 5,
    title: "Business Registration & Compliance",
    category: "Legal & Compliance",
    type: "Guide",
    icon: BookOpen,
    description: "Steps for registering your business, understanding tax obligations, and maintaining compliance.",
    duration: "3 hours",
    instructor: "Legal Advisors",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Social Media for Business Growth",
    category: "Marketing",
    type: "Course",
    icon: BookOpen,
    description: "Leverage social media platforms to reach customers and build your brand.",
    duration: "4 hours",
    instructor: "Digital Marketing Academy",
    level: "Beginner",
  },
  {
    id: 7,
    title: "Customer Service Excellence",
    category: "Business Skills",
    type: "Tutorial",
    icon: Zap,
    description: "Build lasting customer relationships through excellent service and communication.",
    duration: "3 hours",
    instructor: "Service Excellence Institute",
    level: "Beginner",
  },
  {
    id: 8,
    title: "Weekly Cohort Standup",
    category: "Mentorship",
    type: "Tool",
    icon: Users,
    description: "Join weekly meetings with fellow beneficiaries to share progress, challenges, and celebrate wins.",
    duration: "Every Monday, 2PM",
    instructor: "YTEI Program",
    level: "All Levels",
  },
]

export function ResourceLibrary() {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search resources, courses, mentors..."
          className="w-full px-4 py-3 border border-border rounded-lg bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        />
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card
              key={resource.id}
              className="hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                <CardDescription className="text-sm mt-2">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p>{resource.duration}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Level</p>
                      <p>{resource.level}</p>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">By {resource.instructor}</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors font-medium text-sm group/btn">
                    Access Resource
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-secondary transition-colors">
          Load More Resources
        </button>
      </div>
    </div>
  )
}
