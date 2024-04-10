interface IStudentAvaliationGrouped {
    idStudent: string;
    idAppliedDiscipline: string;
    disciplineName: string;
    generalGrade: number;
    createdAt: Date;
}

interface SubStudentAvaliation {
    idStudentAvaliation: string;
    generalGrade: number;
    createdAt: Date;
    competences: JSON;
    observations: string;
}

interface IStudentAvaliation {
    idStudent: string;
    idAppliedDiscipline: string;
    avaliations: SubStudentAvaliation[];
}

export type {
    IStudentAvaliation,
    IStudentAvaliationGrouped
};