import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

import { PORTFOLIO_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <span className="text-lg font-bold tracking-tight">{PORTFOLIO_DATA.name}</span>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-primary transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-primary transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-primary transition-colors">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 sm:px-8 space-y-24">
        {/* Hero Section */}
        <section id="about" className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row py-12">
          <div className="space-y-6 md:w-2/3">
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {PORTFOLIO_DATA.role}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Halo, Saya <span className="text-primary">{PORTFOLIO_DATA.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.bio}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg">
                <a href="#contact">
                  Hubungi Saya <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={PORTFOLIO_DATA.socials.github} target="_blank">
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={PORTFOLIO_DATA.socials.linkedin} target="_blank">
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={`mailto:${PORTFOLIO_DATA.socials.email}`} target="_blank">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={`https://wa.me/${PORTFOLIO_DATA.socials.whatsapp}`} target="_blank">
                    <WhatsappIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:w-1/3">
            <Avatar className="h-48 w-48 border-4 border-muted">
              <AvatarImage src={PORTFOLIO_DATA.avatarUrl} alt={PORTFOLIO_DATA.name} />
              <AvatarFallback>DEV</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Keahlian & Tech Stack</h2>
            <p className="text-muted-foreground">Teknologi yang biasa saya gunakan dalam membangun produk digital.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-4 py-2 text-sm font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Proyek Pilihan</h2>
            <p className="text-muted-foreground">Beberapa karya yang telah saya kerjakan baru-baru ini.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PORTFOLIO_DATA.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </div>
                <CardFooter className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 max-w-xl mx-auto">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Kirim Pesan</h2>
            <p className="text-muted-foreground">
              Formulir ini siap dihubungkan ke backend Python (FastAPI/Django) Anda nanti.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Nama</label>
              <Input id="name" placeholder="Masukkan nama Anda" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="nama@domain.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Pesan</label>
              <Textarea id="message" rows={4} placeholder="Tuliskan pesan Anda..." />
            </div>
            <Button type="submit" className="w-full">
              Kirim Pesan
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Next.js & Shadcn UI.
      </footer>
    </div>
  );
}