// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Outstanding Contributions to Students Council',
    description: '',
    date: '2019',
    location: 'THU McGovern Institute, Beijing',
  },
  {
    name: 'Excellent Student Scholarship',
    description: '',
    date: '2022',
    location: 'THU, Beijing',
  },
  {
    name: 'Agilent Scholarship',
    description: '',
    date: '2022',
    location: 'THU, Beijing',
  },
  {
    name: 'Excellent Contributions to Amgen Scholars Program',
    description: '',
    date: '2023',
    location: 'THU, Beijing',
  },
  {
    name: 'Excellent Student Scholarship',
    description: '',
    date: '2023',
    location: 'THU, Beijing',
  },
  {
    name: 'Excellent Student Scholarship',
    description: '',
    date: '2024',
    location: 'THU, Beijing',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Claustrum Bdnf-e6 neurons mediate general anesthesia',
    description: 'Ph.D. research (2025)',
    link: { href: '', label: 'Neuroscience' },
    tags: ['General anesthesia', 'BDNF']
  },
  {
    name: 'Ngfr+ cholinergic projection from SI/nBM to mPFC selectively regulates temporal order recognition memory',
    description: 'Ph.D. research (2024)',
    link: { href: 'https://www.nature.com/articles/s41467-024-51707-w', label: 'Neuroscience' },
    tags: ['Ngfr', 'Temporal order recognition memory']
  },
  {
    name: 'Herpes simplex virus 1 accelerates the progression of Alzheimer’s disease by modulating microglial phagocytosis and activating NLRP3 pathway',
    description: 'Ph.D. research (2024)',
    link: { href: 'https://jneuroinflammation.biomedcentral.com/articles/10.1186/s12974-024-03166-9', label: 'Neuroscience' },
    tags: ['Alzheimer’s disease', 'HSV']
  },
  {
    name: 'A protocol for establishing a male G×E schizophrenia mouse model',
    description: 'Ph.D. research (2022)',
    link: { href: 'https://star-protocols.cell.com/protocols/2169', label: 'Neuroscience' },
    tags: ['Schizophrenia', 'Mouse model']
  },
  {
    name: 'Corticosterone antagonist or TrkB agonist attenuates schizophrenia-like behavior in a mouse model combining Bdnf-e6 deficiency and developmental stress',
    description: 'Ph.D. research (2022)',
    link: { href: 'https://www.cell.com/iscience/fulltext/S2589-0042(22)00881-1', label: 'Neuroscience' },
    tags: ['Schizophrenia', 'BDNF']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = " Volunteer"
export const activitiesIntro = "Relevant volunteer experiences."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Tsinghua-Peking McGovern Summer Program',
    description:
      'Teaching Assistant.',
    date: '2019',
    location: 'THU, Beijing',
    link: '',
  },
  {
    name: 'Students Council of Tsinghua McGovern Institute',
    description:
      'Membership.',
    date: '2019',
    location: 'THU, Beijing',
    link: 'https://mcgovern.life.tsinghua.edu.cn/en',
  },
  {
    name: 'Laboratory Animal Center of Tsinghua University',
    description:
      'Facility Assistant.',
    date: '2020-2022',
    location: 'THU, Beijing',
    link: 'https://www.larc.tsinghua.edu.cn/',
  },
  {
    name: 'Amgen Scholars Program',
    description:
      'Teaching Assistant.',
    date: '2023',
    location: 'THU, Beijing',
    link: 'https://tsinghuaamgenscholars.com/amgenscholars.html',
  },
]



