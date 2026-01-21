import { SidebarNav } from "@/components/sidebar-nav"
import { SprintReportForm } from "@/components/sprint-report-form"
import { SprintReportHistory } from "@/components/sprint-report-history"

export default function Reports() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-10">
          <div className="px-8 py-4">
            <h1 className="text-lg font-semibold text-foreground">Weekly Progress Updates</h1>
          </div>
        </div>

        <div className="p-6 lg:p-8 max-w-5xl mx-auto pt-12 lg:pt-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Weekly Progress Reporting</h2>
            <p className="text-muted-foreground">
              Submit weekly updates and evidence to track your business progress and unlock grant tranches
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SprintReportForm />
            </div>
            <div className="lg:col-span-1">
              <SprintReportHistory />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
