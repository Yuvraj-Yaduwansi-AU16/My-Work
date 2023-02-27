import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from 'components/Header';
import React from 'react';
import Hero from 'components/Hero';
import About from 'components/About';
import WorkExperience from 'components/WorkExperience';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import ContactMe from 'components/ContactMe';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from 'typings';
import { fetchPageInfo } from 'utils/fetchPageInfo';
import { fetchExperiece } from 'utils/fetchExperience';
import { fetchProjects } from 'utils/fetchProjects';
import { fetchSkills } from 'utils/fetchSkills';
import { fetchSocials } from 'utils/fetchSocials';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({
  pageInfo,
  experience,
  skills,
  projects,
  socials,
}: Props) {
  console.log('g', pageInfo, skills, projects, socials);

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scroll-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    "
    >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperiece();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
