import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <MainNav />
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            size="default"
            className="font-semibold shadow-md transition-transform duration-150 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary"
            asChild
          >
            <a href="/contact">Start a Project</a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
