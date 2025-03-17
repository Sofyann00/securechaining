import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - secureChaining',
  description: 'Learn about secureChaining, your trusted IT solutions partner in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About secureChaining
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Your Trusted IT Solutions Partner in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a commitment to digital excellence, secureChaining has emerged as a leading IT solutions provider in Indonesia. Our journey began with a clear vision: to help businesses transform and thrive in the digital age through innovative technology solutions and expert services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Expert Development Team</li>
                <li>Custom Software Solutions</li>
                <li>Agile Development Methodology</li>
                <li>Comprehensive IT Consulting</li>
                <li>Reliable Technical Support</li>
                <li>Proven Track Record</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At secureChaining, we are committed to delivering exceptional IT solutions that drive business growth. Our team of skilled developers and consultants works tirelessly to understand your unique challenges and create tailored solutions that exceed expectations. We pride ourselves on building long-term partnerships and ensuring client success through innovation and technical excellence.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Custom Software Development</li>
                <li>Web Application Development</li>
                <li>Mobile App Development</li>
                <li>IT Consulting</li>
                <li>Cloud Solutions</li>
                <li>Digital Transformation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Office Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our office:</p>
                <div className="mt-2">
                  <p>secureChaining</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 13120</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Get in touch with us:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021) 60288761</p>
                  <p>Email: admin@secureChaining.com</p>
                  <p>WhatsApp: +62 812-8845-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 