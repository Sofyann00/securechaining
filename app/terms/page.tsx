import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT INFINITI TEKNOLOGI INDONESIA',
  description: 'Terms of Service and conditions for using secureChaining services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by PT INFINITI TEKNOLOGI INDONESIA (hereinafter referred to as &quot;secureChaining&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground">
                secureChaining provides authentic sneakers and related footwear products. All product listings, including prices, availability, and specifications, are subject to change without prior notice. We guarantee the authenticity of all products sold through our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Warranty and Returns
              </h2>
              <p className="text-muted-foreground">
                All products are guaranteed to be 100% authentic. Customers must inspect products upon delivery and report any defects within 48 hours. Returns are only accepted for authenticity issues or manufacturing defects, and items must be unworn, in original condition with all original packaging and tags attached.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground">
                We collect and process personal data in accordance with Indonesian data protection laws. This includes shipping information, purchase history, and payment details. For more information, please refer to our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                While we guarantee product authenticity, secureChaining shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to sizing issues or personal preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
                <div className="mt-2">
                  <p>PT INFINITI TEKNOLOGI INDONESIA</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@secureChaining.com</p>
                  <p>Phone: (021) 60288761</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 