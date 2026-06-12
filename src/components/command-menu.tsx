"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { CommandIcon, Monitor, Moon, Sun, Mail, Phone, ExternalLink } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface CommandMenuProps {
  socials: readonly { readonly name: string; readonly url: string }[];
  email: string;
}

export function CommandMenu({ socials, email }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setOpen(false);
    alert("Email copied to clipboard!");
  };

  return (
    <>
      {/* Desktop fixed bottom prompt */}
      <p className="fixed bottom-0 left-0 right-0 z-50 hidden border-t border-zinc-200 bg-white/80 py-2 text-center text-xs text-zinc-500 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 md:block print:hidden">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>

      {/* Floating Action Button for Mobile / Small Screens */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full shadow-md md:bottom-12 md:right-8 md:hidden print:hidden"
      >
        <CommandIcon className="h-5 w-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => scrollToSection("about")}>
              Go to About Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("skills")}>
              Go to Skills Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("projects")}>
              Go to Projects Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("professional-experience")}>
              Go to Professional Experience Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("academic-experience")}>
              Go to Academic Experience Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("education")}>
              Go to Education Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("certifications")}>
              Go to Certifications Section
            </CommandItem>
            <CommandItem onSelect={() => scrollToSection("contact")}>
              Go to Contact Section
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Contact / Actions">
            <CommandItem onSelect={copyEmail}>
              <Mail className="mr-2 h-4 w-4" />
              Copy Email Address
            </CommandItem>
            <CommandItem onSelect={() => window.open(`mailto:${email}`, "_blank")}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Send Email
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Social Profiles">
            {socials.map((social) => (
              <CommandItem
                key={social.name}
                onSelect={() => {
                  window.open(social.url, "_blank");
                  setOpen(false);
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open {social.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme Settings">
            <CommandItem onSelect={() => { setTheme("light"); setOpen(false); }}>
              <Sun className="mr-2 h-4 w-4" />
              Light Theme
            </CommandItem>
            <CommandItem onSelect={() => { setTheme("dark"); setOpen(false); }}>
              <Moon className="mr-2 h-4 w-4" />
              Dark Theme
            </CommandItem>
            <CommandItem onSelect={() => { setTheme("system"); setOpen(false); }}>
              <Monitor className="mr-2 h-4 w-4" />
              System Theme
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
