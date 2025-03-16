"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Lock, AlertTriangle, Server, Zap } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { useRef } from "react"

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      
      slider.on("created", nextTimeout)
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  // Add ref for services section
  const servicesRef = useRef<HTMLElement>(null)
  
  // Scroll handler function
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Cybersecurity themed */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-blue-900/20" />
          
          {/* Digital security animation elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              >
                <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-red-500/30' : i % 3 === 1 ? 'bg-blue-500/30' : 'bg-green-500/30'} rounded-full blur-sm`} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="mb-8 flex justify-center">
            <Shield className="h-16 w-16 text-red-500 animate-pulse" />
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Secure Your Digital Assets
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Professional penetration testing and security assessments to protect your business from cyber threats
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg" className="group bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 transition-all duration-300">
                Get Protected Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-red-500/30 hover:bg-red-500/10"
            >
              View Security Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Showcase - Security focused */}
      <section ref={servicesRef} className="py-32 relative bg-black/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
              Security Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive cybersecurity solutions to protect your digital infrastructure
            </p>
          </div>

          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card className="group hover:shadow-xl transition-all duration-300 border border-red-900/10 bg-gradient-to-b from-background to-black/5 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-block px-2 py-1 bg-red-600 text-xs text-white rounded mb-2">
                          {product.category}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                        <p className="mt-1 text-sm text-white/80">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/marketplace">
              <Button className="bg-red-600 hover:bg-red-700">
                View All Security Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Security focused */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Our Security Services</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 rounded-2xl bg-gradient-to-b from-black/5 to-transparent border border-red-900/10 hover:border-red-500/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team of security experts is ready to help protect your business from cyber threats.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get a Free Security Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Expert Security Team',
    description: 'Our certified security professionals have years of experience identifying and mitigating vulnerabilities across various platforms and technologies.',
    icon: <Shield className="h-5 w-5 text-red-500" />,
  },
  {
    name: 'Comprehensive Testing',
    description: 'We employ a multi-layered approach to security testing, ensuring no vulnerability goes undetected in your systems and applications.',
    icon: <Lock className="h-5 w-5 text-red-500" />,
  },
  {
    name: 'Actionable Reports',
    description: 'Receive detailed reports with clear remediation steps prioritized by risk level to effectively address security issues in your environment.',
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
  },
]