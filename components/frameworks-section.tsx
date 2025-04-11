import Image from "next/image"

const frameworks = [
  { name: "React", logo: "/images/frameworks/react.svg" },
  { name: "Vue.js", logo: "/images/frameworks/vue.svg" },
  { name: "Angular", logo: "/images/frameworks/angular.svg" },
  { name: "Node.js", logo: "/images/frameworks/node.svg" },
  { name: "Django", logo: "/images/frameworks/django.svg" },
  { name: "Laravel", logo: "/images/frameworks/laravel.svg" },
  { name: "Flutter", logo: "/images/frameworks/flutter.svg" },
  { name: "React Native", logo: "/images/frameworks/react-native.svg" },
]

const FrameworksSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Frameworks</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {frameworks.map((framework, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="framework-logo h-16 flex items-center justify-center">
                <Image
                  src={framework.logo || "/placeholder.svg"}
                  alt={`${framework.name} logo`}
                  width={80}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FrameworksSection
