import type { Route } from "./+types/home";
import { Navbar } from "../components/landing-v3/Navbar";
import { Hero } from "../components/landing-v3/Hero";
import { Problem } from "../components/landing-v3/Problem";
import { Mission } from "../components/landing-v3/Mission";
import { WhatWeDo } from "../components/landing-v3/WhatWeDo";
import { Tracks } from "../components/landing-v3/Tracks";
import { StudentOutcomes } from "../components/landing-v3/StudentOutcomes";
import { TechcoraPartnership } from "../components/landing-v3/TechcoraPartnership";
import { HowWeWork } from "../components/landing-v3/HowWeWork";
import { Governance } from "../components/landing-v3/Governance";
import { FacultyAdvisor } from "../components/landing-v3/FacultyAdvisor";
import { Contact } from "../components/landing-v3/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Tech Visionary Knights SRM — Preparing Students for the AI Era | SRM IST",
    },
    {
      name: "description",
      content:
        "A student-led research and curriculum initiative at SRM Institute of Science and Technology, studying how AI is transforming professional work and building learning paths to prepare students.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <WhatWeDo />
        <Tracks />
        <StudentOutcomes />
        <TechcoraPartnership />
        <HowWeWork />
        <Governance />
        <FacultyAdvisor />
        <Contact />
      </main>
    </>
  );
}
