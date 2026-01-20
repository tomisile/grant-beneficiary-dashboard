import { SidebarNav } from "@/components/sidebar-nav"
import { FundAllocation } from "@/components/fund-allocation"
import { FundTranches } from "@/components/fund-tranches"

export default function Funds() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-10">
          <div className="px-8 py-4">
            <h1 className="text-lg font-semibold text-foreground">Grant Management</h1>
          </div>
        </div>

        <div className="p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Grant Allocation & Disbursement</h2>
            <p className="text-muted-foreground">
              Track your grant tranches, eligibility criteria, and disbursement history
            </p>
          </div>

          <div className="space-y-8">
            <FundAllocation />
            <FundTranches />
          </div>
        </div>
      </main>
    </div>
  )
}
