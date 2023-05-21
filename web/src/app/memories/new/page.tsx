import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

/**
 * Description: Page to add a new memory
 * Data: 2023/05/21
 */

export default function New() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft size={20} />
        Back to timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera size={16} />
            Add media
          </label>

          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 cursor-pointer rounded border-gray-400 bg-gray-700 text-purple-500 focus:outline-none focus:ring-0"
            />
            Make public memory
          </label>
        </div>

        <input type="file" id="media" className="hidden" />

        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Feel free to add photos, videos and reports about this experience that you want to remember forever"
        />
      </form>
    </div>
  )
}
