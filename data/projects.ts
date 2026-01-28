export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  endYear?: number;
  duration: string;
  role: string;
  company: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  mediaUrl: string | null;
  featured: boolean;
  tags: string[];
  testimonial: string | null;
  testimonialAuthor: string | null;
  collaborators: string[];
  description?: string;
  caseStudy?: string;
}

export const projectsData: Project[] = [
  {
    id: "shop-with-google",
    title: "Shop with Google",
    client: "Google",
    year: 2023,
    endYear: 2025,
    duration: "2 years (ongoing)",
    role: "Lead Editor",
    company: "Capture This (NYC)",
    services: ["video-production", "editing", "motion-graphics"],
    challenge:
      "Produce and edit multiple video series showcasing Google's AR shopping features and new product innovations for social media distribution.",
    solution:
      "Led editing efforts on diverse content: Back to School campaign, influencer-driven AR feature videos, and 8 seasons of Google feature announcements. Worked directly with raw footage from influencers and collaborators, delivering polished, platform-optimized videos through Capture This's production workflow with Google and Shadow PR management.",
    results: [
      "Sustained 2-year partnership with Google",
      "Multiple video series across platforms",
      "Significant Instagram growth and engagement",
      "Major influencer partnerships and collaborations",
      "Continuous production cadence (8+ seasons of content)",
    ],
    mediaUrl: "https://www.instagram.com/shopwithgoogle",
    featured: true,
    tags: ["video", "editing", "commercial", "social-media"],
    testimonial: null,
    testimonialAuthor: null,
    collaborators: ["Capture This", "Shadow PR (NYC)", "Google"],
    description:
      "2-year partnership producing and editing high-impact video content for Google's AR shopping features.",
    caseStudy: `# Shop with Google

**Client:** Google  
**Role:** Lead Editor  
**Duration:** 2023–2025 (2 years)  
**Company:** Capture This (NYC)  
**Collaborators:** Capture This, Shadow PR, Google  

---

## Challenge

Google needed to drive awareness and engagement around its shopping features and AR innovations. The challenge was producing a steady stream of high-quality, platform-optimized video content—from influencer collaborations to feature announcements—that would educate users and drive adoption.

## Solution

As a lead editor working through Capture This, I managed the workflow from raw footage to polished final products. This included:

- **Back to School Campaign** — Edited influencer content showcasing Google's AR features in a back-to-school context
- **Influencer Video Series** — Raw footage from major influencers, edited for social distribution (Instagram, YouTube)
- **Feature Announcement Series** — 8+ seasons of short-form and long-form content about new Google features and capabilities
- **Collaborative Workflow** — Close coordination with Capture This, Shadow PR (NYC-based), and Google to ensure brand alignment and timely delivery

The work required flexibility, speed, and a deep understanding of platform best practices—turning raw material into engaging, shareable content consistently over two years.

## Results

- **Sustained Partnership:** Continuous 2-year engagement with Google, proving reliability and quality
- **Significant Growth:** Shop with Google's Instagram channel showed substantial growth and engagement throughout the partnership
- **Major Influencer Collaborations:** Worked with prominent creators across beauty, lifestyle, and tech categories
- **Consistent Production:** Delivered 8+ seasons of content on an ongoing basis
- **Platform Success:** Content driven by results—Google continued investing in the relationship

## Media

**Watch & Follow:**  
[@shopwithgoogle on Instagram](https://www.instagram.com/shopwithgoogle)

---

## Key Takeaways

This project showcased the ability to:
- Work at scale with a Fortune 500 brand
- Manage high-volume editing across multiple series and campaigns
- Collaborate effectively across agencies (Capture This, Shadow PR) and clients
- Deliver consistent, platform-optimized content under sustained timelines
- Adapt editing style across different formats (long-form features, short influencer videos, announcements)

The 2-year engagement reflects Google's confidence in the work and the role as a trusted lead editor in the Capture This ecosystem.`,
  },
  {
    id: "kate-spade-fashion-week",
    title: "Kate Spade Fashion Week",
    client: "Kate Spade",
    year: 2024,
    endYear: 2025,
    duration: "Winter 2024 / Spring 2025",
    role: "Motion Graphics Designer",
    company: "Capture This (NYC)",
    services: ["motion-graphics", "video-production", "design"],
    challenge:
      "Create dynamic, brand-aligned motion graphics for Kate Spade's Fashion Week campaign, including a promotional trailer and runway projection assets.",
    solution:
      "Designed and executed motion graphics effects using Kate Spade's official design files. Built a promotional trailer featuring animated brand assets that responded to the runway collection's visual identity. Also created graphics assets for live runway projection during the show.",
    results: [
      "Fashion Week promotional trailer with custom motion graphics",
      "Runway projection assets used during live show",
      "Brand-aligned visual effects leveraging Kate Spade design system",
      "High-impact promotional content for premium fashion audience",
    ],
    mediaUrl: "https://www.instagram.com/katespade",
    featured: true,
    tags: ["motion-graphics", "video", "design", "fashion"],
    testimonial: null,
    testimonialAuthor: null,
    collaborators: ["Capture This", "Kate Spade"],
    description:
      "Premium motion graphics design for Kate Spade's Fashion Week campaign and live runway projection.",
    caseStudy: `# Kate Spade Fashion Week

**Client:** Kate Spade  
**Role:** Motion Graphics Designer  
**Duration:** Winter 2024 / Spring 2025  
**Company:** Capture This (NYC)  
**Collaborators:** Capture This, Kate Spade  

---

## Challenge

Kate Spade needed promotional content for their Fashion Week presentation that would capture attention and showcase the collection with premium visual impact. The challenge was creating dynamic motion graphics that integrated seamlessly with the brand's design language while serving dual purposes: as a promotional trailer for social/digital channels and as live projection assets during the runway show itself.

## Solution

Working with Kate Spade's official design files, I created a suite of motion graphics effects that brought their brand identity to life. The work included:

- **Promotional Trailer** — High-impact motion graphics video featuring animated brand assets, designed for social distribution and fashion media coverage
- **Runway Projection Assets** — Custom graphics files optimized for live runway projection, synchronized with the collection presentation
- **Brand Integration** — All motion work leveraged Kate Spade's design system, ensuring visual consistency across all touchpoints

The approach centered on taking static brand elements and adding motion, depth, and visual sophistication that elevated the presentation without overwhelming the clothing itself.

## Results

- **Dual-Purpose Deliverables** — Content that worked for both digital promotion and live fashion show
- **Brand-Aligned Execution** — Motion graphics that respected and enhanced Kate Spade's visual identity
- **Premium Fashion Audience** — Reached high-end fashion industry insiders and consumers during Fashion Week
- **Technical Precision** — Projection assets that performed flawlessly during live show

## Media

**View on Kate Spade's channels:**  
[@katespade on Instagram](https://www.instagram.com/katespade)

---

## Key Takeaways

This project demonstrated:
- Ability to work with premium brand guidelines and design systems
- Motion graphics expertise in a high-stakes, time-sensitive environment
- Understanding of dual-purpose content (digital + live installation)
- Technical proficiency in creating assets for projection and broadcast
- Luxury brand sensibility and refinement in visual design

The Fashion Week project showcased the ability to elevate brand presentation through thoughtful, expert motion design—turning static assets into engaging visual experiences.`,
  },
  {
    id: "under-armour-training",
    title: "Under Armour Store Training Videos",
    client: "Under Armour",
    year: 2024,
    duration: "2024 Rollout",
    role: "Lead Producer & Editor",
    company: "Capture This (NYC)",
    services: ["video-production", "editing", "motion-graphics", "instructional-design"],
    challenge:
      "Create a comprehensive series of high-quality instructional videos for Under Armour's nationwide store rollout, covering floor plan layout, store setup, and operations training.",
    solution:
      "Produced and edited a 5-6 video series with comprehensive production elements including graphics, animations, text overlays, and motion design. Each video was designed for clarity and retention, balancing technical information with engaging visual presentation. Videos were distributed to all Under Armour retail locations nationwide.",
    results: [
      "5-6 instructional videos delivered for nationwide rollout",
      "Distributed to all Under Armour store locations across the US",
      "High production quality across entire series",
      "Positive reception and feedback from retail teams",
      "Successful one-time rollout event",
    ],
    mediaUrl: null,
    featured: true,
    tags: ["video", "editing", "training", "instructional", "motion-graphics"],
    testimonial: null,
    testimonialAuthor: null,
    collaborators: ["Capture This", "Under Armour"],
    description:
      "Comprehensive instructional video series for Under Armour's nationwide retail store rollout.",
    caseStudy: `# Under Armour Store Training Videos

**Client:** Under Armour  
**Role:** Lead Producer & Editor  
**Duration:** 2024 Rollout  
**Company:** Capture This (NYC)  
**Collaborators:** Capture This, Under Armour  

---

## Challenge

Under Armour needed to launch a nationwide training program for their retail store teams. The challenge was creating a comprehensive series of instructional videos that would clearly communicate store setup, floor plan layout, and operational procedures to hundreds of store locations across the country—while maintaining engagement and retention despite the inherently technical subject matter.

## Solution

I produced and edited a 5-6 video series that transformed dry operational content into polished, engaging training materials. The work included:

- **Comprehensive Production Elements** — Graphics, animations, text overlays, and motion design to clarify complex information
- **Instructional Design** — Careful pacing and visual hierarchy to ensure comprehension and retention across diverse audience
- **Nationwide Rollout Preparation** — Videos optimized for consistent playback across all Under Armour retail locations
- **Consistent Quality** — High production values across the entire series, reinforcing brand standards

The approach balanced technical accuracy with visual engagement—making inherently procedural content clear, digestible, and even engaging for store staff.

## Results

- **Nationwide Distribution** — Videos sent to all Under Armour store locations across the United States
- **High Reception** — Retail teams responded positively to the quality and clarity
- **One-Time Rollout Success** — Successful execution of a high-stakes training deployment
- **Operational Impact** — Clear, consistent training materials supporting nationwide store setup consistency

## Media

**Internal Distribution:**  
Delivered to all Under Armour retail locations nationwide

---

## Key Takeaways

This project demonstrated:
- Ability to tackle large-scale operational/corporate projects
- Instructional design expertise—making complex information accessible
- Production quality at scale—consistent polish across multiple videos
- Understanding of internal communication needs (not just consumer-facing content)
- Project management and execution under tight timelines
- Technical proficiency with graphics, animation, and motion design

The success of this rollout showed that great production quality isn't limited to consumer-facing campaigns—it's equally critical for internal operations, training, and brand consistency. This work proves the ability to handle complex, high-impact corporate projects with precision and professionalism.`,
  },
];
