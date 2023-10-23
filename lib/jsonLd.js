import { skills } from './skills';
import { getSortedPostsData } from './posts';

const skillsArray = Object.values(skills).map((skill) => skill.name);

const projects = getSortedPostsData('projects').map((project) => ({
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  url: `https://estebanvc.vercel.app/projects/${project.id}`,
}));

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Esteban Vazquez Cardona',
  url: 'https://estebanvc.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/esteban-vc',
    'https://github.com/estevaz12',
  ],
  linkedin: 'https://www.linkedin.com/in/esteban-vc',
  github: 'https://github.com/estevaz12',
  jobTitle: 'Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: '',
    url: '',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://estebanvc.vercel.app/profile-pic.JPG',
    width: '100',
    height: '100',
  },
  description:
    "I'm mostly a front-end developer with some back-end, databases, and data science experience.",
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Carnegie Mellon University',
    url: 'https://www.cmu.edu/',
  },
  knowsAbout: skillsArray,
  hasPart: projects,
  email: 'estebanvazquez1607@gmail.com',
  knowsLanguage: ['English', 'Spanish'],
  resume: {
    '@type': 'Document',
    name: 'Resume',
    url: 'https://1drv.ms/b/s!AumjDqvvmORqjYoaDPoBWBjPo294Og?e=06Rhd5',
  },
};
