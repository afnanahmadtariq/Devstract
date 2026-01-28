import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Attributions | Devstract Blog",
  description: "Credits and attributions for images and resources used on Devstract Blog",
}

export default function AttributionsPage() {
  const attributions = [
    {
      category: "Images",
      items: [
        {
          source: "Unsplash",
          description: "High-quality stock photos",
          link: "https://unsplash.com",
          license: "Unsplash License",
        },
        {
          source: "Pexels",
          description: "Free stock photos and videos",
          link: "https://www.pexels.com",
          license: "Pexels License",
        },
        // Add more image attributions as needed
      ],
    },
    {
      category: "Icons",
      items: [
        {
          source: "React Icons",
          description: "Popular icon libraries for React",
          link: "https://react-icons.github.io/react-icons/",
          license: "MIT License",
        },
        // Add more icon attributions as needed
      ],
    },
    {
      category: "Illustrations & Icons",
      items: [
        {
          source: "Storyset",
          description: "Work illustrations",
          link: "https://storyset.com/work",
          license: "Storyset License",
        },
        {
          source: "Storyset",
          description: "Technology illustrations",
          link: "https://storyset.com/technology",
          license: "Storyset License",
        },
        {
          source: "Storyset",
          description: "Online illustrations",
          link: "https://storyset.com/online",
          license: "Storyset License",
        },
        {
          source: "Storyset",
          description: "Business illustrations",
          link: "https://storyset.com/business",
          license: "Storyset License",
        },
        {
          source: "Freepik",
          description: "Teamwork concept illustration by pikisuperstar",
          link: "https://www.freepik.com/free-vector/teamwork-concept-background-3d_6144599.htm#fromView=image_search_similar&page=1&position=21&uuid=1f70ea6c-d168-4e46-8d21-f4f234bdefc3&query=integration",
          license: "Freepik License",
        },
        // Add more icon attributions as needed
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A142F] mb-4">
            Attributions & Credits
          </h1>
          <p className="text-lg text-gray-600">
            We're grateful to the creators and platforms that provide resources for our blog.
            Below is a list of attributions for the images and resources we use.
          </p>
        </div>

        {/* Attribution Sections */}
        <div className="space-y-12">
          {attributions.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold text-[#0A142F] mb-6">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#0A142F] mb-2">
                          {item.source}
                        </h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500">
                          License: <span className="font-medium">{item.license}</span>
                        </p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#5A44FF] text-white rounded-full hover:bg-[#4833CC] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                      >
                        Visit Source
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-[#0A142F] mb-2">
            Note to Content Creators
          </h3>
          <p className="text-gray-700">
            If you believe any content on this site should be attributed or removed, please{" "}
            <Link
              href="/contact-us"
              className="text-[#5A44FF] hover:underline font-medium"
            >
              contact us
            </Link>
            , and we'll address it promptly.
          </p>
        </div>
      </div>
    </div>
  )
}
