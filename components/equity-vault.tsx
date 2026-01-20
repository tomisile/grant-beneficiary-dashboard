"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lock } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const documents = [
  {
    id: 1,
    title: "Business Registration",
    icon: "🏢",
    items: [
      { name: "CAC Business Registration", status: "uploaded", date: "Jan 5, 2027", size: "1.2 MB" },
      { name: "Tax Registration/TIN", status: "uploaded", date: "Jan 6, 2027", size: "0.8 MB" },
      { name: "Business Plan Summary", status: "pending", date: null, size: null },
    ],
  },
  {
    id: 2,
    title: "Grant Agreement & Pledges",
    icon: "📋",
    items: [
      { name: "Grant Terms & Conditions (Signed)", status: "uploaded", date: "Jan 10, 2027", size: "2.1 MB" },
      { name: "Local Operation Pledge", status: "pending", date: null, size: null },
      { name: "Compliance Undertaking", status: "pending", date: null, size: null },
    ],
  },
  {
    id: 3,
    title: "Identification & Personal Documents",
    icon: "📄",
    items: [
      { name: "National ID/Passport Copy", status: "uploaded", date: "Jan 3, 2027", size: "0.5 MB" },
      { name: "Proof of Address", status: "uploaded", date: "Jan 3, 2027", size: "0.6 MB" },
      { name: "Bank Account Statement", status: "pending", date: null, size: null },
    ],
  },
]

export function EquityVault() {
  const [uploadingId, setUploadingId] = useState<number | null>(null)

  const handleUpload = (id: number) => {
    setUploadingId(id)
    setTimeout(() => setUploadingId(null), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Management</CardTitle>
        <CardDescription>Upload and manage all required grant compliance documents</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {documents.map((section, idx) => (
            <AccordionItem key={section.id} value={`item-${idx}`} className="border-b border-border last:border-0">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left flex-1">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{section.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {section.items.filter((i) => i.status === "uploaded").length}/{section.items.length} complete
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-0">
                <div className="space-y-3 ml-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="p-3 border border-border rounded-lg flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {item.status === "uploaded" ? (
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          ) : (
                            <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          )}
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                        </div>
                        {item.status === "uploaded" && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.date} · {item.size}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 ml-4">
                        {item.status === "uploaded" ? (
                          <button className="text-xs px-2 py-1 rounded bg-secondary text-foreground hover:bg-muted transition-colors">
                            View
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUpload(i)}
                            className="text-xs px-2 py-1 rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                          >
                            {uploadingId === i ? "Uploading..." : "Upload"}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Upload Info */}
        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">📄 Upload Guidelines</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Accepted formats: PDF, JPG, PNG, DOCX (max 10MB)</li>
            <li>• Ensure documents are clear and fully legible</li>
            <li>• All documents are securely encrypted</li>
            <li>• Only authorized personnel have access</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
