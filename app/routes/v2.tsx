import type { Route } from "./+types/home";
import { Navbar } from "../components/landing-v2/Navbar";
import { Hero } from "../components/landing-v2/Hero";
import { Problem } from "../components/landing-v2/Problem";
import { Mission } from "../components/landing-v2/Mission";
import { WhatWeDo } from "../components/landing-v2/WhatWeDo";
import { ForSRM } from "../components/landing-v2/ForSRM";
import { Tracks } from "../components/landing-v2/Tracks";
import { HowWeWork } from "../components/landing-v2/HowWeWork";
import { WhoWeSeek } from "../components/landing-v2/WhoWeSeek";
import { JoinUs } from "../components/landing-v2/JoinUs";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Tech Visionary Knights SRM (V2) — Preparing for the AI Era | SRM IST",
    },
    {
      name: "description",
      content:
        "TVK SRM researches how AI is reshaping careers, identifies the skills that will matter most, and builds curricula to prepare students — before they graduate.",
    },
  ];
}

export default function V2() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <WhatWeDo />
        <ForSRM />
        <Tracks />
        <HowWeWork />
        <WhoWeSeek />
        <JoinUs />
      </main>
    </>
  );
}
