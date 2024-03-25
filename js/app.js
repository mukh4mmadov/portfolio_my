const projects = [
  {
    title: "BACKGROUND-IMAGES",
    githubLink: "https://github.com/mukh4mmadov/background-images",
    vercelLink: "https://ansormed22-q5zu.vercel.app/",
  },
  {
    title: "ANSORMED",
    githubLink: "https://github.com/mukh4mmadov/ansormed22",
    vercelLink: "https://ansormed22.vercel.app/",
  },
  {
    title: "UZBEKISTAN",
    githubLink: "https://github.com/mukh4mmadov/uzbekistan",
    vercelLink: "https://uzbekistan-black.vercel.app/",
  },
  {
    title: "USA",
    githubLink: "https://github.com/mukh4mmadov/USA",
    vercelLink: "https://usa-ten.vercel.app/",
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
