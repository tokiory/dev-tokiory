interface Project {
  name: string;
  href: string;
}

const GITHUB_PROJECTS: Project[] = [
  {
    href: 'tokiory/developer-log',
    name: 'Developer Log'
  },
  {
    href: "tokiory/_dev_tokiory",
    name: "/dev/tokiory",
  },
  {
    href: "tokiory/neovim-boilerplate",
    name: "Neovim Boilerplate",
  },
  {
    href: "tokiory/termfolio",
    name: "Termfolio",
  },
  {
    href: 'tokiory/devquizy',
    name: "Devquizy"
  }
];

export const PROJECTS: Project[] = [
  ...GITHUB_PROJECTS.map((p) => ({
    ...p,
    href: "https://github.com/" + p.href,
  })),
];
