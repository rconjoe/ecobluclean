import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Droplets,
  Truck,
  Clock,
  DollarSign,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Users,
  Quote
} from "lucide-react"

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate__animated animate__fadeInDown animate__faster">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-primary animate-pulse-slow" />
            <span className="text-2xl font-bold text-foreground font-heading">EcoBlu Clean</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Process
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300">Get Free Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate__animated animate__fadeInLeft animate__delay-0-5s">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit text-primary-foreground bg-primary/80 backdrop-blur-sm border-primary/30 py-1.5 px-3 rounded-full shadow-sm animate__animated animate__fadeIn animate__delay-1s">
                  <Leaf className="h-4 w-4 mr-2" />
                  15 Years Environmental Experience
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
                  Eco-Friendly Cleaning Solutions for Long Beach
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional pressure washing and cleaning services using environmentally safe solutions. From
                  driveways to commercial spaces, we deliver spotless results you can trust.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-1-5s">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Estimate
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground animate__animated animate__fadeInUp animate__delay-2s">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  On-Time Guarantee
                </div>
              </div>
            </div>
            <div className="relative animate__animated animate__fadeInRight animate__delay-0-5s">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecoblu1.jpg-u8CzHrk9WAK0oYYapC48Vk4y829Jgm.jpeg"
                alt="EcoBlu Clean professional truck with cleaning equipment"
                className="rounded-lg shadow-2xl w-full object-cover transform hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Trust Bar below Hero */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 py-6 text-foreground shadow-inner">
          <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-6 text-center text-sm lg:text-base font-semibold animate__animated animate__fadeInUp animate__delay-2-5s">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Local Experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Guaranteed Sparkle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-muted/50 to-background/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate__animated animate__fadeInUp">
            <Badge variant="secondary" className="w-fit mx-auto text-primary-foreground bg-primary/80 py-1.5 px-3 rounded-full mb-4">
              What We Do
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Comprehensive Cleaning Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From residential homes to large commercial properties, EcoBlu Clean delivers unparalleled cleanliness
              with a focus on sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-transparent hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-0-5s">
              <CardHeader>
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30 mx-auto">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">Residential Cleaning</CardTitle>
                <CardDescription className="text-center">
                  Driveways, walkways, pool decks, patio decks, sidewalks, and garage floors for sparkling homes.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 transition-colors">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-0-7s">
              <CardHeader>
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30 mx-auto">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">Commercial Services</CardTitle>
                <CardDescription className="text-center">
                  Parking lots, dumpster enclosures, commercial walkways, and building exteriors for businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 transition-colors">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-0-9s">
              <CardHeader>
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30 mx-auto">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">Specialized Cleaning</CardTitle>
                <CardDescription className="text-center">
                  Stain, oil, rust removal, gutters, septic tanks, and boat cleaning with precision.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 transition-colors">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section id="process" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate__animated animate__fadeInUp">
            <Badge variant="secondary" className="w-fit mx-auto text-primary-foreground bg-accent/80 py-1.5 px-3 rounded-full mb-4">
              Our Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Achieving Spotless Results, Sustainably</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven method to ensure every cleaning project is completed efficiently, effectively, and with environmental care.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:gap-16 animate__animated animate__fadeInUp animate__delay-0-5s">
              <div className="order-2 lg:order-1 space-y-4 text-center lg:text-left">
                <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-lg">Step 1</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">Free On-Site Consultation & Estimate</h3>
                <p className="text-lg text-muted-foreground">
                  We begin with a thorough assessment of your property to understand your specific cleaning needs and provide a transparent, no-obligation quote.
                </p>
                <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Schedule Now</Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecoblu-consultation.jpg" // Placeholder image for consultation
                  alt="Initial consultation with EcoBlu Clean"
                  className="rounded-lg shadow-xl w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:gap-16 animate__animated animate__fadeInUp animate__delay-0-7s">
              <div className="order-2 lg:order-2 space-y-4 text-center lg:text-right">
                <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-lg">Step 2</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">Eco-Friendly Cleaning Execution</h3>
                <p className="text-lg text-muted-foreground">
                  Our certified technicians use advanced hydro jetting and power washing equipment combined with safe, biodegradable cleaning agents to deliver deep, effective results.
                </p>
                <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Our Methods</Button>
              </div>
              <div className="order-1 lg:order-1 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecoblu-cleaning.jpg" // Placeholder image for cleaning execution
                  alt="Eco-friendly cleaning in progress"
                  className="rounded-lg shadow-xl w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:gap-16 animate__animated animate__fadeInUp animate__delay-0-9s">
              <div className="order-2 lg:order-1 space-y-4 text-center lg:text-left">
                <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-lg">Step 3</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">Final Inspection & Satisfaction Guarantee</h3>
                <p className="text-lg text-muted-foreground">
                  We ensure every surface is spotless and that you are completely satisfied with our work. Our job isn't done until it meets our high standards and yours.
                </p>
                <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Our Guarantee</Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecoblu-inspection.jpg" // Placeholder image for final inspection
                  alt="Final inspection of cleaned area"
                  className="rounded-lg shadow-xl w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section (Kept mostly as is for flow) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInLeft animate__delay-0-5s">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecoblu2.jpg-ffhsnqt2hsAtNxNSRIUiQu65YmGhJg.jpeg"
                alt="Professional cleaning equipment truck"
                className="rounded-lg shadow-xl w-full transform hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg pointer-events-none"></div>
            </div>
            <div className="space-y-6 animate__animated animate__fadeInRight animate__delay-0-5s">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Professional Equipment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art hydro jet and power washing equipment ensures thorough, efficient cleaning while
                our eco-friendly solutions protect your property and the environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 animate__animated animate__heartBeat animate__delay-1s" />
                  <span className="text-foreground">Hydro jet cleaning systems</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 animate__animated animate__heartBeat animate__delay-1-2s" />
                  <span className="text-foreground">Professional power washers</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 animate__animated animate__heartBeat animate__delay-1-4s" />
                  <span className="text-foreground">Eco-friendly cleaning solutions</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 animate__animated animate__heartBeat animate__delay-1-6s" />
                  <span className="text-foreground">Fully equipped mobile units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate__animated animate__fadeInUp">
            <Badge variant="secondary" className="w-fit mx-auto text-primary-foreground bg-accent/80 py-1.5 px-3 rounded-full mb-4">
              What Our Clients Say
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Trusted by Homeowners & Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why EcoBlu Clean is the preferred choice for eco-friendly pressure washing in Long Beach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/70 backdrop-blur-md border border-border/50 shadow-lg p-6 flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-0-5s">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <CardContent className="space-y-4 p-0">
                <p className="text-lg italic text-foreground">
                  "EcoBlu Clean transformed our driveway! It looks brand new, and I love that they use eco-friendly products. Professional and on-time!"
                </p>
                <p className="font-semibold text-primary">- Sarah M., Homeowner</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-md border border-border/50 shadow-lg p-6 flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-0-7s">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <CardContent className="space-y-4 p-0">
                <p className="text-lg italic text-foreground">
                  "Their commercial cleaning service is top-notch. Our building exterior has never looked this good. Highly recommend for any business."
                </p>
                <p className="font-semibold text-primary">- John D., Business Owner</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-md border border-border/50 shadow-lg p-6 flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-0-9s">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <CardContent className="space-y-4 p-0">
                <p className="text-lg italic text-foreground">
                  "I was amazed at how quickly and thoroughly they cleaned my patio. The team was friendly, efficient, and truly cared about the environment."
                </p>
                <p className="font-semibold text-primary">- Emily R., Long Beach Resident</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-tl from-muted/50 to-background/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate__animated animate__fadeInUp">
            <Badge variant="secondary" className="w-fit mx-auto text-primary-foreground bg-primary/80 py-1.5 px-3 rounded-full mb-4">
              Our Core Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Why Choose EcoBlu Clean?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Locally-owned and operated with a commitment to excellence and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50 shadow-md transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-0-5s">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/30 shadow-inner">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">Beat or Match Price</h3>
              <p className="text-muted-foreground">
                Competitive pricing with a guarantee to beat or match any legitimate quote, ensuring value.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50 shadow-md transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-0-7s">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/30 shadow-inner">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">Truly Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Environmentally safe cleaning solutions that protect your property and nature, without compromise.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50 shadow-md transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-0-9s">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/30 shadow-inner">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">On-Time Guarantee</h3>
              <p className="text-muted-foreground">
                Reliable service with punctual arrival and completion times, respecting your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Pre-Contact) */}
      <section className="py-20 bg-primary text-primary-foreground text-center animate__animated animate__fadeInUp">
        <div className="container mx-auto px-4 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading leading-tight">
            Ready for a Spotless, Eco-Friendly Clean?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the EcoBlu Clean difference. Get your free, no-obligation estimate today and discover how easy it is to achieve brilliant results responsibly.
          </p>
          <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 px-4 py-2">
            <Phone className="h-6 w-6 mr-3" />
            Get Your Free Estimate Now!
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">Contact EcoBlu Clean Today</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and schedule your next professional cleaning service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-md transform hover:scale-[1.005] transition-transform duration-300 animate__animated animate__fadeInLeft animate__delay-0-5s">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">General Inquiries</CardTitle>
                <CardDescription>Serving Long Beach, CA and surrounding areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Long Beach, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone Support</p>
                    <p className="text-muted-foreground">Call us for immediate assistance or questions.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Inquiries</p>
                    <p className="text-muted-foreground">Send us an email for detailed requests or quotes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 animate__animated animate__fadeInRight animate__delay-0-5s">
              <div className="text-center p-8 bg-primary/10 rounded-lg border border-primary/30 shadow-xl transform hover:scale-[1.005] transition-transform duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Quick Estimate Form</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out a quick form to get a personalized quote for your cleaning project. We'll get back to you promptly!
                </p>
                {/* Placeholder for an actual form component */}
                <div className="w-full h-32 bg-input border border-border rounded-md flex items-center justify-center text-muted-foreground italic">
                  [ Your Contact Form Here ]
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 mt-6">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground font-heading">EcoBlu Clean</span>
            </div>
            <p className="text-muted-foreground">Professional eco-friendly cleaning services in Long Beach, CA</p>
            <p className="text-sm text-muted-foreground">
              © 2025 EcoBlu Clean. All rights reserved. | Locally-owned & operated
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
