import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="Devstract Logo" width={40} height={40} className="w-10 h-10" />
      <span className="font-bold text-xl text-white">DEVSTRACT</span>
    </Link>
  )
}
