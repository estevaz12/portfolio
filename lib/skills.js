import { getSortedPostsData } from './posts';
import { skills } from './skillsData';

// TODO: do the same thing but for courses

/**
 * Calculates the count of projects for each skill in the given list of projects.
 *
 * @return {Array<Object>} An array containing objects with id, name, and projects.
 */
export function getSkillProjectCount() {
  const counts = {};
  const projects = getSortedPostsData('projects');

  for (const project of projects) {
    const stack = project.stack.split(',');

    for (const skill of stack) {
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
    }
  }

  // let countedSkills be an array containing objects with id, name, and projects
  const countedSkills = Object.values(counts);

  // Sort countedSkills by project count in descending order
  countedSkills.sort((a, b) => {
    if (a.projects === b.projects) {
      return a.name.localeCompare(b.name);
    }
    return b.projects - a.projects;
  });

  return countedSkills;
}
