export interface ClientLogo {
    name: string;
    imageUrl: string;
    description?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    school: string;
    quote: string;
    imageUrl?: string;
}

export class ClientDataUtil {
    private static clientLogos: ClientLogo[] = [
        { name: 'NPDC', imageUrl: 'clients/NPDC.png', description: 'NPDC School' },
        { name: 'Avenues', imageUrl: 'clients/avenues.png', description: 'Avenues School' },
        { name: 'Gitanjali', imageUrl: 'clients/gitanjali.png', description: 'Gitanjali School' },
        { name: 'Santhinikethan', imageUrl: 'clients/santhinikethan.png', description: 'Santhinikethan School' },
        { name: 'SKML', imageUrl: 'clients/skml.png', description: 'SKML School' },
        { name: 'SVJY', imageUrl: 'clients/svjy.png', description: 'SVJY School' },
    ];

    private static testimonials: Testimonial[] = [
        {
            name: 'Principal',
            role: 'School Administrator',
            school: 'NPDC School',
            quote: 'schoolmate has completely transformed how we manage our school operations. From attendance to fee management, everything is now streamlined and efficient.',
        },
        {
            name: 'Director',
            role: 'Management',
            school: 'Avenues School',
            quote: 'The best school management software we have ever used. The support team is exceptional and the features are comprehensive.',
        },
        {
            name: 'Administrator',
            role: 'School Admin',
            school: 'Gitanjali School',
            quote: 'schoolmate makes school administration effortless. The mobile app keeps parents connected and informed about their children\'s progress.',
        },
        {
            name: 'Principal',
            role: 'School Head',
            school: 'Santhinikethan School',
            quote: 'We switched to schoolmate and saw immediate improvements in our daily operations. Highly recommend it to all educational institutions.',
        },
    ];

    static getClientLogos(): ClientLogo[] {
        return [...ClientDataUtil.clientLogos];
    }

    static getTestimonials(): Testimonial[] {
        return [...ClientDataUtil.testimonials];
    }

    static addClientLogo(logo: ClientLogo): void {
        ClientDataUtil.clientLogos.push(logo);
    }

    static removeClientLogo(name: string): void {
        ClientDataUtil.clientLogos = ClientDataUtil.clientLogos.filter(l => l.name !== name);
    }

    static getClientCount(): number {
        return ClientDataUtil.clientLogos.length;
    }
}
