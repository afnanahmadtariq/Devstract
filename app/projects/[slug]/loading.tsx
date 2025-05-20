import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectLoading() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-8 bg-gray-200" />
          <div className="max-w-4xl">
            <Skeleton className="h-6 w-32 mb-4 bg-gray-200" />
            <Skeleton className="h-12 w-full max-w-2xl mb-6 bg-gray-200" />
            <div className="flex flex-wrap gap-6 mb-8">
              <Skeleton className="h-6 w-40 bg-gray-200" />
              <Skeleton className="h-6 w-40 bg-gray-200" />
              <Skeleton className="h-6 w-40 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Skeleton className="h-[500px] w-full rounded-lg mb-16 bg-gray-200" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Skeleton className="h-10 w-64 mb-6 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-3/4 mb-10 bg-gray-200" />

              <Skeleton className="h-10 w-64 mb-6 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-3/4 mb-10 bg-gray-200" />

              <Skeleton className="h-10 w-64 mb-6 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-3/4 mb-10 bg-gray-200" />

              <Skeleton className="h-10 w-64 mb-6 bg-gray-200" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Skeleton className="h-64 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-64 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-64 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-64 w-full rounded-lg bg-gray-200" />
              </div>

              <Skeleton className="h-10 w-64 mb-6 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-full mb-2 bg-gray-200" />
              <Skeleton className="h-6 w-3/4 mb-10 bg-gray-200" />
            </div>

            <div>
              <div className="bg-gray-100/70 backdrop-blur-sm border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
                <Skeleton className="h-8 w-48 mb-4 bg-gray-300" />
                <div className="space-y-3">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="h-6 w-full bg-gray-300" />
                  ))}
                </div>

                <Skeleton className="h-8 w-48 mt-8 mb-4 bg-gray-300" />
                <Skeleton className="h-6 w-full bg-gray-300" />

                <Skeleton className="h-8 w-48 mt-8 mb-4 bg-gray-300" />
                <Skeleton className="h-6 w-full mb-4 bg-gray-300" />
                <Skeleton className="h-10 w-full rounded-md bg-teal-500 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 mx-auto mb-12 bg-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full bg-gray-300" />
                <div className="p-6">
                  <Skeleton className="h-5 w-24 mb-2 bg-gray-300" />
                  <Skeleton className="h-7 w-full bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
