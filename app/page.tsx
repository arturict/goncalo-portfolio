"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Linkedin, 
  Mail, 
  Briefcase, 
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Calendar,
  Heart,
  Target,
  Handshake
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background with Mouse Tracking */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
        
        {/* Mouse-reactive gradient */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-4 hover:bg-white/10 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium text-gray-300">3rd Year Commercial Apprentice</span>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Gonçalo Torres Novo
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl text-gray-400">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <p className="font-mono text-center">Kaufmann EFZ Lehrling</p>
            </div>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed px-4">
              3rd year apprentice at <span className="text-cyan-400 font-semibold">CALIDA AG</span> in <span className="text-blue-400 font-semibold">Sursee</span>, 
              based in <span className="text-blue-400 font-semibold">Emmen</span>, developing expertise in retail operations, customer service, and business management
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Apprenticeship ends: August 2026</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8 px-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 text-sm sm:text-base"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm text-sm sm:text-base"
              asChild
            >
              <a 
                href="mailto:goncalo@torres-novo.ch"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact
              </a>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto text-cyan-400 rotate-90" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 space-y-24 sm:space-y-32">
        
        {/* Experience Section */}
        <section className="space-y-8 sm:space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Retail & Business</p>
            </div>
          </div>

          <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20">
            <CardHeader className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="space-y-2 w-full">
                  <CardTitle className="text-2xl sm:text-3xl text-white group-hover:text-cyan-400 transition-colors">
                    CALIDA AG
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-400">
                    Kaufmann EFZ Lehrling • 2nd Year
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-blue-400">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2023 - Aug 2026 • Emmen, LU</span>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shrink-0">
                  Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Training as a commercial apprentice at CALIDA AG. Gaining comprehensive experience in retail operations, 
                customer service, and business management in a dynamic fashion and retail environment. Developing 
                professional skills in commerce and business administration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                  Retail Management
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                  Customer Service
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                  Business Operations
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="space-y-8 sm:space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Education</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Learning & growing</p>
            </div>
          </div>

          <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-white group-hover:text-purple-400 transition-colors">
                Berufsbildungszentrum Wirtschaft, Informatik und Technik
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-400">
                Kaufmann EFZ (Aug 2023 - Aug 2026)
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 sm:space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Core Competencies</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Professional skills & knowledge</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-cyan-400 flex items-center gap-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Business Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Customer Service", "Retail Operations", "Merchandising", "Team Collaboration", "Communication", "Problem Solving"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-green-400 flex items-center gap-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["German", "Portuguese", "English", "French (Learning)"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-purple-400 flex items-center gap-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Reliability", "Adaptability", "Work Ethic", "Initiative", "Attention to Detail", "Time Management"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-pink-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-pink-400 flex items-center gap-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Office Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Microsoft Office", "Email Management", "Documentation", "Spreadsheets", "Data Entry", "Digital Communication"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-8 sm:space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Background & Interests</p>
            </div>
          </div>

          <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-orange-500/20">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-white group-hover:text-orange-400 transition-colors">
                Commercial Apprentice at CALIDA AG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I am a commercial apprentice (Kaufmann EFZ Lehrling) in my third year of training at CALIDA AG, 
                a leading fashion and retail company based in Sursee. I am based in Emmen and gaining practical 
                experience in retail operations, customer service, business management, and team collaboration in a dynamic environment.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                My apprenticeship provides comprehensive training in commercial and business operations, 
                with completion in August 2026. I am committed to developing professional skills and making 
                meaningful contributions to the organization and retail sector.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline" className="bg-orange-500/10 text-orange-300 border-orange-500/30">
                  CALIDA AG Sursee
                </Badge>
                <Badge variant="outline" className="bg-orange-500/10 text-orange-300 border-orange-500/30">
                  Based in Emmen
                </Badge>
                <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-500/30">
                  Completing Aug 2026
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="scroll-fade-in">
          <Card className="relative overflow-hidden bg-gradient-to-br from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-cyan-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <CardContent className="relative z-10 py-12 sm:py-16 text-center space-y-6 sm:space-y-8 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 shadow-lg shadow-cyan-500/50">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">Get In Touch</h2>
                <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 px-4">
                  Interested in connecting? Feel free to reach out on LinkedIn or send me an email.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                  asChild
                >
                  <a 
                    href="mailto:goncalo@torres-novo.ch"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-24 sm:mt-32 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-sm sm:text-base space-y-2">
              <p className="text-gray-500">
                © {new Date().getFullYear()} Gonçalo Torres Novo. Crafted with Next.js, Tailwind CSS & shadcn/ui
              </p>
              <p className="text-gray-600 text-xs">
                Design & Development by <a href="https://arturf.ch" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">Artur Ferreira</a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:goncalo@torres-novo.ch"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
