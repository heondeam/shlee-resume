export interface SidebarLeftLink {
  type: 'link' | 'text'
  icon: string
  url: string
}

export const config = {
  navLinks: [
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Experience',
      link: '#experience'
    },
    {
      name: 'Projects',
      link: '#projects'
    },
    {
      name: 'Other Projects',
      link: '#worthy-projects'
    }
  ],
  sidebarLinks: {
    left: [
      {
        type: 'link',
        icon: 'github',
        url: 'https://github.com/heondeam'
      },
      {
        type: 'link',
        icon: 'blog',
        url: 'https://hunsenal.tistory.com/'
      },
      {
        type: 'link',
        icon: 'notion',
        url: 'https://heondeam.notion.site/Steady-Study-853240f5fe874921ab8aa6822fc67652?pvs=4'
      }
    ],
    right: [
      {
        type: 'text',
        text: 'seoungheonle@gmail.com'
      }
    ]
  }
}
