import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { StageCard } from "@/components/stage-card"
import { FundsSummary } from "@/components/funds-summary"
import { RecentUpdates } from "@/components/recent-updates"
import { QuickActions } from "@/components/quick-actions"
import { TrendChart } from "@/components/trend-chart"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <DashboardHeader />

        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Entrepreneur</h2>
            <p className="text-muted-foreground">Track your venture progress and manage your grant allocation</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StageCard />
            <FundsSummary />
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <TrendChart />
            </div>
            <QuickActions />
          </div>

          {/* Recent Updates */}
          <RecentUpdates />
        </div>
      </main>
    </div>
  )
}
