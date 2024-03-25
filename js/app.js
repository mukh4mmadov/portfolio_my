const projects = [
  {
    title: "channel-card-component",
    githubLink: "https://github.com/mukh4mmadov/channel-card-component",
    vercelLink: "https://channel-card-component.vercel.app/",
  },
  {
    title: "SNAP-MAIN",
    githubLink: "https://github.com/mukh4mmadov/snap-main",
    vercelLink: "https://snap-main.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
