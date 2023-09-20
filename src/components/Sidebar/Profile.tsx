import { LogOut } from 'lucide-react'
import { Button } from '../Form/Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/newton-duarte.png"
        alt="newton duarte github avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Newton Duarte
        </span>
        <span className="trucante text-sm text-zinc-500">
          newton_@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
