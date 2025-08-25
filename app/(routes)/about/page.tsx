// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hey, I’m Armaan, a Computer Engineering student at UWaterloo. I ship neat things on the web with React/Next.js and TypeScript, and I love sprinkling in data/AI when it actually helps. I’m joining Shopify as a SWE intern in Fall ’25; before that I built automation and analytics at BOXX Insurance and hacked on projects with Headstarter and NowFloats.
              </p>
              <p>
                I’m the “ship it, then polish it” kind of teammate: clear comms, clean code, and a bias for action. Off the keyboard, I make videos to help incoming Waterloo students and run a football podcast. I bring the same energy from the pitch to projects—communicate, press together, and finish strong.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-muted-foreground">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="mt-2">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            
            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category as SkillCategory].map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Directed Waterloo Engineering Society’s 3-day First Year Conference (~1,800 students), coordinating presenters including the First Year Office and optimizing booth flow.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Built a Claims Automation API (TypeScript/Node.js/MySQL) that cut processing time from ~2 hours to &lt; 1 minute and reduced data errors by ~40%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Trained Amazon QuickSight Q on US datasets to ~95% answer accuracy using synonyms, entity grouping, and calculated fields.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Shipped <em>Hackademics</em> at Hack the North ’24 — converts files/audio into Anki flashcards using LLM + speech-to-text; 200+ Q/A pairs generated in demos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Built <em>BudgetRoyale</em> — early users cut unnecessary spend by ~20%/month and engagement rose ~30% in the first month.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>
                      Creator: Waterloo YouTube channel (100k+ views) and <em>Offside Banter</em> football content (425k+ views) — building in public and growing community.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}