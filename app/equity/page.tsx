import { SidebarNav } from "@/components/sidebar-nav"
import { EquityVault } from "@/components/equity-vault"
import { ComplianceStatus } from "@/components/compliance-status"

export default function Equity() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />

      <main className="flex-1 lg:ml-0">
        <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-10">
          <div className="px-8 py-4">
            <h1 className="text-lg font-semibold text-foreground">Grant Agreement & Compliance</h1>
          </div>
        </div>

        <div className="p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Grant Agreement & Compliance</h2>
            <p className="text-muted-foreground">Acknowledge grant terms, submit required documents, and track compliance status</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <EquityVault />
            </div>
            <div className="lg:col-span-1">
              <ComplianceStatus />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
