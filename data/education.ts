export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
  {
    id: "uwaterloo-basc-ce",
    degree: "BASc in Computer Engineering",
    institution: "University of Waterloo",
    location: "Waterloo, Ontario, Canada",
    startDate: "September 2023",
    endDate: "May 2028",
    description:
      "Coursework: Algorithms & Data Structures, Digital Circuits, ASIC Design, Embedded Systems. Involvements: EngSoc First Year Conference Director, Soccer Intramural Referee, Orientation Leader (Big)."
  }
];
