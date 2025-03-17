import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT INFINITI TEKNOLOGI INDONESIA',
  description: 'Privacy Policy for secureChaining services and customer data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                secureChaining collects personal information including but not limited to: name, email address, phone number, shipping address, shoe size preferences, purchase history, and payment information when you make a purchase or create an account on our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use your information to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Process your sneaker orders and provide customer support</li>
                <li>Send order tracking and delivery updates</li>
                <li>Notify you about new sneaker releases and restocks</li>
                <li>Personalize your shopping experience based on your preferences</li>
                <li>Verify product authenticity and maintain transaction records</li>
                <li>Send promotional offers and newsletters (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground">
                Under Indonesian data protection laws, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your shopping experience, remember your preferences, maintain your login status, analyze site traffic, and provide personalized sneaker recommendations based on your browsing history.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about this Privacy Policy, product authenticity, or our data practices, please contact us at:</p>
                <div className="mt-2">
                  <p>PT INFINITI TEKNOLOGI INDONESIA</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: support@secureChaining.com</p>
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