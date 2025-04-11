import Image from "next/image"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/images/team/alex.jpg",
    bio: "Full-stack developer with 10+ years of experience in building scalable web applications.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "/images/team/sarah.jpg",
    bio: "UX/UI specialist with a passion for creating intuitive and beautiful user experiences.",
  },
  {
    name: "Michael Rodriguez",
    role: "Mobile Development Lead",
    image: "/images/team/michael.jpg",
    bio: "Expert in cross-platform mobile development with Flutter and React Native.",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer",
    image: "/images/team/priya.jpg",
    bio: "Cloud infrastructure specialist with expertise in AWS, Azure, and CI/CD pipelines.",
  },
]

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Devstract</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Founded in 2018, Devstract is a team of passionate developers and designers dedicated to creating
              exceptional digital experiences. We combine technical expertise with creative thinking to deliver
              solutions that drive business growth.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Our mission is to empower businesses with cutting-edge technology that solves real-world problems and
              creates meaningful connections with users.
            </p>
            <Button>Learn More About Us</Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/about/office.jpg" alt="Devstract office" fill className="object-cover" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Meet Our Team</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
