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
  let countedSkills = [];
  const projects = getSortedPostsData('projects');

  projects.forEach((project) => {
    const stack = project.stack.split(',');
    stack.forEach((skill) => {
      countedSkills.push({
        id: skill,
        ...skills[skill],
        projects: (skills[skill]?.projects || 0) + 1,
      });
    });
  });

  // Sort countedSkills by project count in descending order
  // TODO: sort by project count
  countedSkills.sort((a, b) => b.projects - a.projects);

  return countedSkills;
}
