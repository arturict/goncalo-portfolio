import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code2, Trophy } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-white/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Available for Opportunities
            </Badge>
            <h1 className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
              Artur Ferreira
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 md:text-2xl">
              Informatiker EFZ Applikationsentwickler
            </p>
            <p className="mx-auto max-w-2xl text-lg text-slate-500">
              3rd year apprentice at CKW AG / Axpo Group, passionate about building modern web applications
              and real-time solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="group">
                <a
                  href="https://github.com/arturict"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <a
                  href="https://www.linkedin.com/in/artur-ferreira7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <a href="mailto:artur@example.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="space-y-16">
          {/* Experience Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Experience</h2>
            </div>
            <Card className="border-2 transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">CKW AG / Axpo Group</CardTitle>
                    <CardDescription className="text-base">
                      Informatiker EFZ Applikationsentwickler • 3rd Year Apprentice
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Current</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-slate-600">
                  Developing full-stack applications and REST APIs using modern technologies.
                  Contributing to enterprise-level solutions in the energy sector.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Education</h2>
            </div>
            <Card className="border-2 transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
                </CardTitle>
                <CardDescription className="text-base">
                  Informatiker EFZ Applikationsentwickler
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Technical Skills</h2>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-800">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Vue.js", "JavaScript", "HTML/CSS", "Tailwind CSS"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm transition-colors hover:bg-slate-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-800">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["PHP", "Laravel", ".NET", "ASP.NET", "C#", "Python"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm transition-colors hover:bg-slate-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-800">Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {["MySQL", "MSSQL", "MongoDB"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm transition-colors hover:bg-slate-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-800">Other</h3>
                    <div className="flex flex-wrap gap-2">
                      {["REST APIs", "WebSocket", "Real-time Applications"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm transition-colors hover:bg-slate-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Featured Project</h2>
            </div>
            <Card className="border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-white transition-all duration-300 hover:border-slate-400 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      CodeCellar
                      <Badge className="ml-2 bg-gradient-to-r from-blue-500 to-cyan-500">
                        Hackathon 2024
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Real-time Web Code Editor
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-slate-600">
                  Built during the{" "}
                  <a
                    href="https://young-talents-hackathon.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline decoration-blue-300 transition-colors hover:text-blue-700 hover:decoration-blue-500"
                  >
                    2024 Young Talents Hackathon
                  </a>
                  , CodeCellar is a collaborative code editor with real-time synchronization powered
                  by WebSocket. Based on Monaco Editor (the same editor used by Visual Studio Code),
                  it enables multiple users to code together seamlessly.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline">Monaco Editor</Badge>
                  <Badge variant="outline">WebSocket</Badge>
                  <Badge variant="outline">Real-time Sync</Badge>
                  <Badge variant="outline">Collaborative</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Connect Section */}
          <section className="space-y-6">
            <Card className="border-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <CardContent className="space-y-6 pb-8 pt-8 text-center">
                <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-300">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="group bg-white hover:bg-slate-100"
                  >
                    <a
                      href="https://github.com/arturict"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="group bg-white hover:bg-slate-100"
                  >
                    <a
                      href="https://www.linkedin.com/in/artur-ferreira7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-slate-600">
            © {new Date().getFullYear()} Artur Ferreira. Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </main>
  );
}
