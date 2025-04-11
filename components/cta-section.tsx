import { Button } from "@/components/ui/button"

const CtaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Background circuit pattern */}
          <div className="absolute inset-0 opacity-10 circuit-pattern" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Let's collaborate to create innovative digital solutions that drive your business forward. Contact us today
            to start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button size="lg">Start a Project</Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
