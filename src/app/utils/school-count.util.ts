export class SchoolCountUtil {
    static getSchoolCount(): number {
        return 100;
    }

    static getStudentCount(): number {
        return 10000;
    }

    static getTeacherCount(): number {
        return 1000;
    }

    static getModuleCount(): number {
        return 40;
    }

    static getClientRetention(): number {
        return 96;
    }

    static getYearsExperience(): number {
        return 10;
    }

    static getAllStats(): { label: string; value: number; suffix: string; icon: string }[] {
        return [
            { label: 'Schools Trusted Us', value: SchoolCountUtil.getSchoolCount(), suffix: '+', icon: 'school' },
            { label: 'Happy Students', value: SchoolCountUtil.getStudentCount(), suffix: '+', icon: 'groups' },
            { label: 'Expert Teachers', value: SchoolCountUtil.getTeacherCount(), suffix: '+', icon: 'person' },
            { label: 'Client Retention', value: SchoolCountUtil.getClientRetention(), suffix: '%', icon: 'trending_up' },
        ];
    }
}
