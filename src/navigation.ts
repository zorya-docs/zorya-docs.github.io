import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Milestones',
      href: getPermalink('/milestones'),
    },
    {
      text: 'Calendar',
      href: getPermalink('/calendar'),
    },
    {
      text: 'Minutes',
      href: getPermalink('/minutes'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    }
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/zorya-docs/zorya-docs.github.io', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Team',
      links: [
        { text: 'João Varela', href: 'https://github.com/joaovarela14' },
        { text: 'Diogo Fernandes', href: 'https://github.com/diogux' },
        { text: 'Henrique Oliveira', href: 'https://github.com/Hbmo1' },
        { text: 'Raquel Vinagre', href: 'https://github.com/raquelvinagre' },
        { text: 'Carolina Prata', href: 'https://github.com/carolmprata' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Projeto em Informática', href: '#' },
    { text: '2025'},
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-google', href: 'https://drive.google.com/drive/folders/1bUm1OpfH7sn6omVz0ELLiO8NO9dMocuL' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ]
};
