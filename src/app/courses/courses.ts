export class Course {
    name: string;
    credit: number;
    grade: string;
}

export class Courses{

    courses: Course[] = []
}

export let SAMPLEDATA: Course[] = [
    { name: 'CHM201', credit: 6, grade: 'A' },
    { name: 'CHM203', credit: 6, grade: 'B+' },
    { name: 'MAT201', credit: 6, grade: 'B' },
    { name: 'CSC201', credit: 6, grade: 'C' },
    { name: 'CPT205', credit: 6, grade: 'B+' },
    { name: 'ENG101', credit: 2, grade: 'C+' }
]