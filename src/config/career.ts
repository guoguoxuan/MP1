// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Looking for a Postdoc position',
      title: 'Neuroscience',
      logo: 'college',
      start: '2025',
      end: 'Present'
    },
   
  ]