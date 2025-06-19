import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Sparkles,
  Upload,
  Video,
  Download,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Star,
  Globe,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Hero Section with enhanced animations */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-sm font-semibold animate-fade-in-up hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default">
            <Sparkles className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            AI-Powered Podcast Clipper
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform Your Podcasts Into
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
              Viral Short Clips
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Automatically identify the most engaging moments from your long-form content and create perfectly cropped vertical clips optimized for TikTok, YouTube Shorts, and Instagram Reels.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/signup">
              <Button  className="text-base px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                Start Creating Clips
              </Button>
            </Link>
          </div>

          {/* Enhanced Floating Stats with parallax effect */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl group backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-125 transition-transform duration-300">10,000+</div>
              <div className="text-muted-foreground font-medium">Clips Generated</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl group backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-125 transition-transform duration-300">95%</div>
              <div className="text-muted-foreground font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl group backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-125 transition-transform duration-300">2min</div>
              <div className="text-muted-foreground font-medium">Avg Processing</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl group backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-125 transition-transform duration-300">500+</div>
              <div className="text-muted-foreground font-medium">Happy Creators</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground opacity-60" />
          </div>
        </div>
      </section>

      {/* How It Works with stagger animations */}
      <section className="py-24 px-6 bg-gradient-to-r from-muted/30 to-muted/50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How ClipPod Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From upload to viral clips in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm group animate-slide-in-left">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <Upload className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg mb-4 font-bold group-hover:text-primary transition-colors duration-300">
                  1. Upload Your Podcast
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Simply drag and drop your MP4 video file. We support files up to 500MB with lightning-fast upload speeds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <Sparkles className="w-10 h-10 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                </div>
                <CardTitle className="text-lg mb-4 font-bold group-hover:text-primary transition-colors duration-300">
                  2. AI Analysis
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Our advanced AI identifies viral moments, detects active speakers, and generates perfect subtitles automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm group animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <Download className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg mb-4 font-bold group-hover:text-primary transition-colors duration-300">
                  3. Download & Share
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Get your perfectly cropped vertical clips ready for TikTok, YouTube Shorts, Instagram Reels and more platforms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
      </section>

      {/* Features with enhanced hover effects */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Powerful AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create engaging short-form content that drives results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: TrendingUp, title: "Viral Moment Detection", desc: "AI-powered analysis identifies the most engaging and shareable moments from your content using advanced algorithms.", gradient: "from-red-500/20 to-orange-500/20" },
              { icon: Users, title: "Active Speaker Detection", desc: "Smart cropping that automatically focuses on the person speaking for maximum engagement and viewer retention.", gradient: "from-blue-500/20 to-cyan-500/20" },
              { icon: Video, title: "Vertical Format Optimization", desc: "Perfect 9:16 aspect ratio clips optimized for TikTok, YouTube Shorts, and Instagram Reels.", gradient: "from-green-500/20 to-emerald-500/20" },
              { icon: Sparkles, title: "Automatic Subtitles", desc: "AI-generated captions with perfect timing using advanced speech recognition technology for accessibility.", gradient: "from-purple-500/20 to-pink-500/20" },
              { icon: Clock, title: "Lightning Fast Processing", desc: "GPU-accelerated processing delivers your clips in minutes, not hours. Get results when you need them.", gradient: "from-yellow-500/20 to-orange-500/20" },
              { icon: Shield, title: "Secure & Private", desc: "Your content is processed securely with enterprise-grade encryption and automatically deleted after processing.", gradient: "from-indigo-500/20 to-purple-500/20" }
            ].map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 group backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with enhanced animations */}
      <section className="py-24 px-6 bg-gradient-to-r from-muted/30 to-muted/50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of content creators who are already growing their audience with ClipPod
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Podcast Host", content: "ClipPod transformed my podcast workflow. What used to take hours of manual editing now happens automatically in minutes. My engagement has increased 300%!", gradient: "from-blue-500 to-cyan-500" },
              { name: "Mike Chen", role: "Content Creator", content: "The AI detection is incredibly accurate. It finds moments I wouldn't have thought to clip. My TikTok account went from 1K to 50K followers in 3 months!", gradient: "from-purple-500 to-pink-500" },
              { name: "Alex Rivera", role: "Agency Owner", content: "Game changer for our agency. We can now deliver viral content to all our clients consistently. The ROI has been phenomenal!", gradient: "from-orange-500 to-red-500" }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 group backdrop-blur-sm animate-slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-6">
                  <div className="flex justify-center gap-2 mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                  <div className="flex items-center gap-3 mt-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* CTA with enhanced effects */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 group-hover:scale-105 transition-transform duration-300">
              Ready to Go Viral?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join thousands of creators who are already using ClipPod to turn their long-form content into viral short clips. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup">
                <Button  className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group">
                  Start Creating Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group backdrop-blur-sm">
                  <Globe className="w-6 h-6 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with enhanced styling */}
      <footer className="border-t border-border/50 py-16 px-6 bg-gradient-to-r from-muted/30 to-muted/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-in-up">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-primary-foreground animate-pulse" />
              </div>
              <span className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">ClipPod</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-all duration-300 font-medium transform hover:-translate-y-0.5 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-all duration-300 font-medium transform hover:-translate-y-0.5 hover:scale-105"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground transition-all duration-300 font-medium transform hover:-translate-y-0.5 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              © 2025 ClipPod. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
