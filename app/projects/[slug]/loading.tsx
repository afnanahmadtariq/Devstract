import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectLoading() {
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-8" />
          <div className="max-w-4xl">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-12 w-full max-w-2xl mb-6" />
            <div className="flex flex-wrap gap-6 mb-8">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-6 w-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Skeleton className="h-[500px] w-full rounded-lg mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Skeleton className="h-10 w-64 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-10" />

              <Skeleton className="h-10 w-64 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-10" />

              <Skeleton className="h-10 w-64 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-10" />

              <Skeleton className="h-10 w-64 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>

              <Skeleton className="h-10 w-64 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-10" />
            </div>

            <div>
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="space-y-3">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="h-6 w-full" />
                  ))}
                </div>

                <Skeleton className="h-8 w-48 mt-8 mb-4" />
                <Skeleton className="h-6 w-full" />

                <Skeleton className="h-8 w-48 mt-8 mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-5 w-24 mb-2" />
                  <Skeleton className="h-7 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
