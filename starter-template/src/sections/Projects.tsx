"use client"; // Add this line to mark this component as a client component

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { Button, Card, rem, ThemeIcon } from "@mantine/core";
import { List } from "@mantine/core";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex  mt-10 md:mt-20 flex-col gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              classNames={{
                root: `bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[""] 
                after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 
                after:rounded-3xl after:outline-white/20 pb-0 p-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none`,
              }}
            >
              <div 
                className="absolute inset-0 -z-10"
                style={{
                  backgroundColor: `url(${GrainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="gap-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon color="teal" size={24} radius="xl">
                        <CheckIcon className="size-4 md:size-6 " />
                      </ThemeIcon>
                    }
                    className="flex flex-col gap-4 mt-4 md:mt-5"
                  >
                    {project.results.map((result) => (
                      <List.Item
                        classNames={{
                          itemWrapper: "flex gap-2 items-center",
                        }}
                        key={result.title}
                        className="text-sm text-white/50 md:text-base"
                      >
                        {result.title}
                      </List.Item>
                    ))}
                  </List>
                  <a href={project.link}>
                    <Button
                      classNames={{
                        root: "bg-white text-gray-950 cursor-pointer h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8",
                        inner: "flex gap-2 items-center",
                      }}
                      variant="default"
                      rightSection={<ArrowUpRightIcon className="size-4" />}
                    >
                      Visit Live Site
                    </Button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
