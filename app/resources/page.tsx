import { SidebarNav } from "@/components/sidebar-nav"
import { ResourceLibrary } from "@/components/resource-library"
import { ResourceFilters } from "@/components/resource-filters"

export default function Resources() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-10">
          <div className="px-8 py-4">
            <h1 className="text-lg font-semibold text-foreground">Resource Library</h1>
          </div>
        </div>

        <div className="p-6 lg:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Learning & Collaboration Hub</h2>
            <p className="text-muted-foreground">
              Access training materials, mentorship schedules, and collaboration tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <ResourceFilters />
            </div>
            <div className="lg:col-span-3">
              <ResourceLibrary />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
