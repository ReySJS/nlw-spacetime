/**
 * Description: EmptyMemories
 * Data: 2023/05/18
 */

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You haven&apos;t registered any memories yet, start&nbsp;
        <a className="underline hover:text-gray-50" href="/memories/new">
          creating now
        </a>
        !
      </p>
    </div>
  )
}
