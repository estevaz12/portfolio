import { getSortedPostsData } from './posts';

export const skills = {
  nextjs: {
    name: 'Next.js',
  },
  tailwind: {
    name: 'Tailwind CSS',
  },
  camel: {
    name: 'Apache Camel',
  },
  java: {
    name: 'Java',
  },
  gcloudStore: {
    name: 'G Cloud Storage',
  },
  gke: {
    name: 'GKE',
  },
  css: {
    name: 'CSS',
  },
  html: {
    name: 'HTML',
  },
  react: {
    name: 'React',
  },
  gAnalytics: {
    name: 'Google Analytics',
  },
  alfresco: {
    name: 'Alfresco',
  },
  js: {
    name: 'JavaScript',
  },
  markdown: {
    name: 'Markdown',
  },
};

// TODO: do the same thing but for courses
export function getSkillProjectCount() {
  let counts = {};
  const projects = getSortedPostsData('projects');

  projects.forEach((project) => {
    const stack = project.stack.split(',');

    stack.forEach((skill) => {
      // add skill to counts object, add one if already there
      if (!counts[skill]) {
        counts[skill] = {
          id: skill,
          ...skills[skill],
          projects: 1,
        };
      } else {
        counts[skill].projects += 1;
      }
    });
  });

  // let countedSkills be an array containing objects with id, name, and projects
  let countedSkills = Object.values(counts);

  // Sort countedSkills by project count in descending order
  return countedSkills.sort((a, b) => (a.projects > b.projects ? -1 : 1));
}
