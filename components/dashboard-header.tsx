"use client"

export function DashboardHeader() {
  return (
    <header className="hidden lg:block bg-white border-b border-border sticky top-0 z-10">
      <div className="px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Beneficiary ID: BEN-2027-0847</span>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            AI
          </div>
        </div>
      </div>
    </header>
  )
}
