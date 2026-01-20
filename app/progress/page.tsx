import { SidebarNav } from "@/components/sidebar-nav"
import { MilestoneTimeline } from "@/components/milestone-timeline"
import { MilestoneDetails } from "@/components/milestone-details"

export default function Progress() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-10">
          <div className="px-8 py-4">
            <h1 className="text-lg font-semibold text-foreground">Venture Progress Roadmap</h1>
          </div>
        </div>

        <div className="p-6 lg:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Your Business Journey</h2>
            <p className="text-muted-foreground">
              Complete milestones to unlock grant tranches and progress toward sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <MilestoneTimeline />
            </div>
            <div className="lg:col-span-2">
              <MilestoneDetails />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
