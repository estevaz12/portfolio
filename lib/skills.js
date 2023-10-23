import { getSortedPostsData } from './posts';

export const skills = {
  nextjs: {
    name: 'Next.js',
    courses: 0,
  },
  tailwind: {
    name: 'Tailwind CSS',
    courses: 0,
  },
  camel: {
    name: 'Apache Camel',
    courses: 1,
  },
  java: {
    name: 'Java',
    courses: 1,
  },
  gcloudStore: {
    name: 'G Cloud Storage',
    courses: 0,
  },
  gke: {
    name: 'GKE',
    courses: 0,
  },
  css: {
    name: 'CSS',
    courses: 4,
  },
  html: {
    name: 'HTML',
    courses: 4,
  },
  react: {
    name: 'React',
    courses: 0,
  },
  gAnalytics: {
    name: 'Google Analytics',
    courses: 0,
  },
  alfresco: {
    name: 'Alfresco',
    courses: 0,
  },
  js: {
    name: 'JavaScript',
    courses: 5,
  },
  markdown: {
    name: 'Markdown',
    courses: 0,
  },
  python: {
    name: 'Python',
    courses: 3,
  },
  mysql: {
    name: 'MySQL',
    courses: 1,
  },
  postgres: {
    name: 'PostgreSQL',
    courses: 1,
  },
  rails: {
    name: 'Ruby on Rails',
    courses: 1,
  },
  ruby: {
    name: 'Ruby',
    courses: 1,
  },
  swift: {
    name: 'Swift',
    courses: 1,
  },
  wordpress: {
    name: 'WordPress',
    courses: 0,
  },
  sql: {
    name: 'SQL',
    courses: 1,
  },
  azureML: {
    name: 'Azure ML',
    courses: 0,
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
  return countedSkills.sort((a, b) => {
    if (a.projects === b.projects) {
      return a.name.localeCompare(b.name);
    }
    return b.projects - a.projects;
  });
}
