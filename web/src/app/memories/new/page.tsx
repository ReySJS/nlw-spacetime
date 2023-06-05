import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { NewMemoryForm } from '@/components/NewMemoryForm'

/**
 * Description: Page to add a new memory
 * Data: 2023/05/21
 */

export default function New() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft size={20} />
        Back to timeline
      </Link>
      <NewMemoryForm />
    </div>
  )
}
