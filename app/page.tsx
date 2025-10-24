import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Trophy,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
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
            <span className="text-sm font-medium text-gray-300">Available for Opportunities</span>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Artur Ferreira
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-400">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <p className="font-mono">Informatiker EFZ Applikationsentwickler</p>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              3rd year apprentice at <span className="text-cyan-400 font-semibold">CKW AG / Axpo Group</span>, 
              crafting modern web experiences with cutting-edge technologies
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/arturict" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="https://www.linkedin.com/in/artur-ferreira7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:artur@arturf.ch">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 space-y-32">
        
        {/* Experience Section */}
        <section className="space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
              <Briefcase className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
              <p className="text-gray-500 mt-1">Building the future</p>
            </div>
          </div>

          <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-3xl text-white group-hover:text-cyan-400 transition-colors">
                    CKW AG / Axpo Group
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-400">
                    Informatiker EFZ Applikationsentwickler • 3rd Year Apprentice
                  </CardDescription>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                  Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">
                Developing enterprise-level full-stack applications and REST APIs. Contributing to innovative 
                solutions in the energy sector with modern web technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
              <p className="text-gray-500 mt-1">Learning & growing</p>
            </div>
          </div>

          <Card className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
              </CardTitle>
              <CardDescription className="text-lg text-gray-400">
                Informatiker EFZ Applikationsentwickler
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
              <p className="text-gray-500 mt-1">My tech stack</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["Vue.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "React", "Next.js"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-base bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "Laravel", ".NET", "ASP.NET", "C#", "Python", "Node.js"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-base bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["MySQL", "MSSQL", "MongoDB", "PostgreSQL"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-base bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800 hover:border-pink-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Other
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["REST APIs", "WebSocket", "Real-time Apps", "Docker", "Git"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-base bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Project */}
        <section className="space-y-12 scroll-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/30">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Featured Project</h2>
              <p className="text-gray-500 mt-1">Hackathon winner</p>
            </div>
          </div>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-yellow-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-4xl text-white group-hover:text-yellow-400 transition-colors">
                      CodeCellar
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                      Hackathon 2024
                    </Badge>
                  </div>
                  <CardDescription className="text-xl text-gray-400">
                    Real-time Collaborative Code Editor
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Built during the{" "}
                <a
                  href="https://young-talents-hackathon.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline decoration-yellow-400/30 hover:decoration-yellow-400 transition-all"
                >
                  2024 Young Talents Hackathon
                </a>
                . A collaborative code editor with real-time synchronization powered by WebSocket. 
                Based on Monaco Editor (VS Code's engine), enabling seamless multi-user coding.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Monaco Editor", "WebSocket", "Real-time Sync", "Collaborative", "Live Cursors"].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="px-4 py-2 text-base bg-yellow-500/10 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="scroll-fade-in">
          <Card className="relative overflow-hidden bg-gradient-to-br from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-cyan-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <CardContent className="relative z-10 py-16 text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 shadow-lg shadow-cyan-500/50">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Build Something Amazing</h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-300">
                  Open to discussing new projects, creative ideas, or opportunities to bring your vision to life
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 text-lg px-8 py-6"
                  asChild
                >
                  <a href="mailto:artur@arturf.ch">
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://github.com/arturict" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-32 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Artur Ferreira. Crafted with Next.js, Tailwind CSS & shadcn/ui
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/arturict" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/artur-ferreira7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:artur@arturf.ch"
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
