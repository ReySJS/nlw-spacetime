import Image from 'next/image'

import { getUser } from '@/lib/auth'

/**
 * Description: Profile
 * Data: 2023/05/18
 */

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[150px] text-base leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-xs text-red-400 hover:text-red-500"
        >
          Logout
        </a>
      </p>
    </div>
  )
}
