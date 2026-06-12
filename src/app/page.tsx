"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, Mail, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CommandMenu } from "@/components/command-menu";

export default function Page() {
  const { setTheme, resolvedTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof RESUME_DATA.projects[number] | null>(null);
  const [selectedCert, setSelectedCert] = useState<typeof RESUME_DATA.certifications[number] | null>(null);
  const [certPage, setCertPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCertPage((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="container relative mx-auto max-w-3xl px-4 py-8 md:py-16 print:p-8">
      {/* Fixed border/dotted dividers wrapper */}
      <div className="space-y-6 md:space-y-8 print:space-y-4">

        {/* HERO SECTION */}
        <section id="hero" className="flex flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {RESUME_DATA.name}
              </h1>
              <p className="text-sm font-mono text-muted-foreground hidden sm:block">
                {RESUME_DATA.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline font-mono"
              >
                <Globe className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </div>

            {/* Social Icons & Email */}
            <div className="grid grid-cols-4 gap-1.5 w-fit sm:flex sm:flex-wrap print:hidden">
              {RESUME_DATA.contact.email && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => window.open(`mailto:${RESUME_DATA.contact.email}`, "_blank")}
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => window.open(`tel:${RESUME_DATA.contact.tel}`, "_blank")}
                  title="Phone"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              )}
              {RESUME_DATA.contact.social.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => window.open(social.url, "_blank")}
                    title={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                );
              })}

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 print:hidden relative"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                title="Toggle Theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Print Only Contact details */}
            <div className="hidden flex-col gap-1 text-xs font-mono text-muted-foreground print:flex">
              <p>{RESUME_DATA.contact.email}</p>
              <p>{RESUME_DATA.contact.tel}</p>
              <p>https://janithagamage.furo.lk/</p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/5 px-2.5 py-0.5 text-xs text-red-600 dark:bg-red-500/10 dark:text-red-400 w-fit print:hidden">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Avatar Hover Transition */}
          <div className="relative group shrink-0">
            <Avatar className="h-32 w-32 border border-border md:h-40 md:w-40 shrink-0">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
              <AvatarFallback className="font-mono text-lg">{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* ABOUT SECTION */}
        <Section id="about" title="About">
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* SKILLS SECTION */}
        <Section id="skills" title="Skills">
          <div className="flex flex-col gap-4">
            {RESUME_DATA.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-1.5">
                <h3 className="text-xs font-mono font-medium text-muted-foreground/80 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* PROFESSIONAL EXPERIENCE */}
        <Section id="professional-experience" title="Professional Experience">
          <div className="flex flex-col gap-4">
            {RESUME_DATA.professionalExperience.map((work) => (
              <Card key={work.company} className="p-4 md:p-5 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 bg-card print:p-0 print:border-none print:bg-transparent">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
                        {work.company}
                      </a>
                    </h3>
                    <div className="text-xs font-mono text-muted-foreground">
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-xs text-muted-foreground mt-1">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="p-0 mt-2 text-xs text-muted-foreground leading-relaxed print:text-zinc-600">
                  {work.description}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {work.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-[9px] px-1.5 py-0">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* ACADEMIC EXPERIENCE */}
        <Section id="academic-experience" title="Academic Experience">
          <div className="flex flex-col gap-4">
            {RESUME_DATA.academicExperience.map((academic) => (
              <Card key={academic.company} className="p-4 md:p-5 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 bg-card print:p-0 print:border-none print:bg-transparent">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={academic.link} target="_blank" rel="noopener noreferrer">
                        {academic.company}
                      </a>
                    </h3>
                    <div className="text-xs font-mono text-muted-foreground">
                      {academic.start} - {academic.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-xs text-muted-foreground mt-1">
                    {academic.title}
                  </h4>
                </CardHeader>
                <CardContent className="p-0 mt-2 text-xs text-muted-foreground leading-relaxed print:text-zinc-600">
                  {academic.description}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {academic.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-[9px] px-1.5 py-0">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* PROJECTS SECTION */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 print:grid-cols-1">
            {RESUME_DATA.projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden print:border-none print:shadow-none">
                <div
                  className="relative h-36 w-full overflow-hidden bg-secondary print:hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 300px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2 print:p-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline wavy-link"
                      >
                        {project.title}
                        <span className="text-xs text-muted-foreground font-normal">→</span>
                      </a>
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs mt-1 leading-relaxed text-muted-foreground flex flex-col gap-1.5 items-start">
                    <span>{project.description}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-0.5 print:hidden cursor-pointer bg-transparent border-none p-0 mt-0.5"
                    >
                      Read more
                    </button>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 p-4 pt-0 justify-between gap-3 print:p-0 print:mt-1">
                  <div className="flex flex-col gap-2">
                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold bg-red-500/5 dark:bg-red-500/10 px-1.5 py-0.5 rounded w-fit">
                        📊 {project.metrics}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] px-1 py-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* EDUCATION SECTION */}
        <Section id="education" title="Education">
          <div className="flex flex-col gap-4">
            {RESUME_DATA.education.map((edu) => (
              <Card key={edu.school} className="p-4 md:p-5 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 bg-card print:p-0 print:border-none print:bg-transparent">
                <CardHeader className="p-0">
                  <div className="flex items-start justify-between gap-x-2 text-base">
                    <div className="flex items-center gap-3">
                      {edu.logo && (
                        <Image
                          src={edu.logo}
                          alt={edu.school}
                          width={48}
                          height={48}
                          className="h-12 w-12 shrink-0 object-contain print:hidden"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold leading-none text-sm md:text-base">
                          {edu.school}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-1">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground shrink-0">
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* CERTIFICATIONS SECTION */}
        <Section id="certifications" title="Certifications">
          {/* Screen Only Interactive Carousel */}
          <div className="print:hidden space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {RESUME_DATA.certifications.slice(certPage * 3, (certPage + 1) * 3).map((cert) => (
                <Card
                  key={cert.title}
                  className="flex flex-col items-center text-center p-4 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 group min-h-[170px]"
                  onClick={() => setSelectedCert(cert)}
                >
                  {cert.badge && (
                    <div className="relative aspect-[3/2] w-32 mb-3 overflow-hidden rounded bg-secondary border border-border p-1">
                      <Image
                        src={cert.badge}
                        alt={cert.title}
                        fill
                        sizes="128px"
                        className="object-contain p-0.5 grayscale-0 group-hover:grayscale transition-all duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <h4 className="text-xs font-semibold text-foreground leading-snug line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1.5">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-1.5 pt-1">
              {[0, 1, 2].map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCertPage(pageIndex)}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer",
                    certPage === pageIndex
                      ? "bg-foreground w-3"
                      : "bg-muted hover:bg-zinc-400 dark:hover:bg-zinc-600"
                  )}
                  title={`Page ${pageIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Print Only Simple List */}
          <div className="hidden print:grid print:grid-cols-1 print:gap-3">
            {RESUME_DATA.certifications.map((cert) => (
              <div key={cert.title} className="flex items-center justify-between gap-x-2 text-xs">
                <div>
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="font-mono text-muted-foreground mt-0.5">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <hr className="border-t border-dashed border-border print:hidden" />

        {/* CONTACT SECTION */}
        <Section id="contact" title="Contact">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p>
              I am actively seeking internship opportunities where I can contribute as a Developer, Product Strategist, or both. Let's discuss how I can add value to your team while learning and growing professionally.
            </p>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-muted-foreground mt-1">
              <p>
                Email:{" "}
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline font-semibold text-foreground">
                  {RESUME_DATA.contact.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${RESUME_DATA.contact.tel}`} className="hover:underline font-semibold text-foreground">
                  {RESUME_DATA.contact.tel}
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://janithagamage.furo.lk/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-foreground">
                  janithagamage.furo.lk
                </a>
              </p>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="mt-8 border-t border-border pt-4 text-center text-xxs text-muted-foreground print:hidden">
          <p>© {new Date().getFullYear()} Janitha Gamage. Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>

      {/* Command Menu */}
      <CommandMenu socials={RESUME_DATA.contact.social} email={RESUME_DATA.contact.email} />

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border border-border bg-background p-6">
          <DialogTitle className="sr-only">
            {selectedProject?.title || "Project Details"}
          </DialogTitle>
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between gap-4 flex-wrap pr-6">
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.metrics && (
                    <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold bg-red-500/5 dark:bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/10">
                      📊 {selectedProject.metrics}
                    </span>
                  )}
                </div>
                <DialogDescription className="text-xs font-mono mt-1 text-muted-foreground">
                  Tech Stack: {selectedProject.techStack.join(" · ")}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2">
                    Overview
                  </h3>
                  <p className="text-pretty">{selectedProject.description}</p>
                </div>
                {selectedProject.longDescription && (
                  <div>
                    <h3 className="text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-2">
                      Key Features & Tech Stack
                    </h3>
                    <div className="whitespace-pre-wrap font-mono text-xs bg-muted/40 p-4 rounded-lg border border-border text-foreground/90 overflow-x-auto leading-relaxed">
                      {selectedProject.longDescription}
                    </div>
                  </div>
                )}
                <div className="flex justify-end gap-2 pt-4 border-t border-border mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs font-mono"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                  <Button
                    size="sm"
                    className="h-8 text-xs font-mono"
                    onClick={() => window.open(selectedProject.link, "_blank")}
                  >
                    View Project →
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Certificate Detail Modal */}
      <Dialog open={selectedCert !== null} onOpenChange={(open) => { if (!open) setSelectedCert(null); }}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border border-border bg-background p-6">
          <DialogTitle className="sr-only">
            {selectedCert?.title || "Certificate Image"}
          </DialogTitle>
          {selectedCert && (
            <div className="flex flex-col gap-4">
              <DialogHeader>
                <div className="flex items-center justify-between gap-4 flex-wrap pr-6">
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {selectedCert.title}
                  </h2>
                </div>
                <p className="text-xs font-mono mt-1 text-muted-foreground">
                  Issued by: {selectedCert.issuer} • {selectedCert.date}
                </p>
              </DialogHeader>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-secondary">
                <Image
                  src={selectedCert.badge}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-w-1024px) 100vw, 800px"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t border-border mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs font-mono"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </Button>
                {"link" in selectedCert && selectedCert.link && (
                  <Button
                    size="sm"
                    className="h-8 text-xs font-mono"
                    onClick={() => window.open(selectedCert.link, "_blank")}
                  >
                    Verify Credential →
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
