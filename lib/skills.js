import { getSortedPostsData } from './posts';
import { skills } from './skillsData';

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
