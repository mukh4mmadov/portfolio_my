const projects = [
  {
    title: "Animation-1",
    githubLink: "https://github.com/mukh4mmadov/animation-1",
    vercelLink: "https://animation-1-cyan.vercel.app/",
  },
  {
    title: "Animation-2",
    githubLink: "https://github.com/mukh4mmadov/animation-2",
    vercelLink: "https://animation-2-six.vercel.app/",
  },
  {
    title: "Animation-3",
    githubLink: "https://github.com/mukh4mmadov/animation-3",
    vercelLink: "https://animation-3-dvjo.vercel.app/",
  },
  {
    title: "Animation-4",
    githubLink: "https://github.com/mukh4mmadov/animation-4",
    vercelLink: "https://animation-4-sage.vercel.app/",
  },
  {
    title: "Animation-5",
    githubLink: "https://github.com/mukh4mmadov/animation-5",
    vercelLink: "https://animation-5-phi.vercel.app/",
  },
  {
    title: "Animation-6",
    githubLink: "https://github.com/mukh4mmadov/animation-6",
    vercelLink: "https://animation-6-gold.vercel.app/",
  },
  {
    title: "Animation-7",
    githubLink: "https://github.com/mukh4mmadov/animation-7",
    vercelLink: "https://animation-7-two.vercel.app/",
  },
  {
    title: "Animation-8",
    githubLink: "https://github.com/mukh4mmadov/animation-8",
    vercelLink:
      "https://animation-8-mgi9a0npq-ozodbeks-projects-5b942123.vercel.app/",
  },
  {
    title: "Animation-9",
    githubLink: "https://github.com/mukh4mmadov/animation-9",
    vercelLink:
      "https://animation-9-ejyde7q9o-ozodbeks-projects-5b942123.vercel.app/",
  },
  {
    title: "Animation-10",
    githubLink: "https://github.com/mukh4mmadov/animation-10",
    vercelLink: "https://animation-10.vercel.app/",
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
