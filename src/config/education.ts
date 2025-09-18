
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Tsinghua University',
      major: 'Ph.D. in Neuroscience',
      logo: 'college',
      start: '2018',
      end: '2025'
    },
    {
      school: 'National Taiwan University',
      major: 'B.Sc. in Life Science',
      logo: 'college',
      start: '2016',
      end: '2017'
    },
    {
      school: 'China Agricultural University',
      major: 'B.Sc. in Biological Science',
      logo: 'college',
      start: '2014',
      end: '2018'
    },
  ]