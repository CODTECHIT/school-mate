import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoRouteConfig {
  title: string;
  description: string;
  keywords: string;
  type?: 'website' | 'article';
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly baseUrl = 'https://www.schoolmate.co.in';
  private readonly siteName = 'Schoolmate';
  private readonly defaultOgImage = `${this.baseUrl}/images/home_banner.png`;

  private readonly fallbackConfig: SeoRouteConfig = {
    title: 'Schoolmate - School Management Software & ERP',
    description:
      'Schoolmate helps schools and colleges manage academics, attendance, fees, transport, exams, and communication in one smart ERP platform.',
    keywords:
      'school management software, school ERP, student management system, fee management software, attendance software',
    type: 'website',
  };

  private readonly seoByPath: Record<string, SeoRouteConfig> = {
    '': {
      title: 'Schoolmate - Best School Management Software | ERP for Schools & Colleges',
      description:
        'Schoolmate is a complete school ERP for schools, colleges, institutes, and coaching centers with modules for academics, fees, attendance, exams, transport, and mobile apps.',
      keywords:
        'school management software, school ERP, school management system, college ERP software, institute management software, education ERP India',
      type: 'website',
    },
    home: {
      title: 'Schoolmate - Best School Management Software | ERP for Schools & Colleges',
      description:
        'Digitize school operations with Schoolmate ERP. Manage admissions, attendance, fees, transport, exams, communication, and reports with role-based mobile apps.',
      keywords:
        'school ERP software, school administration software, student information system, school mobile app, smart school software',
      type: 'website',
    },
    about: {
      title: 'About Schoolmate | Trusted School ERP Software in India',
      description:
        'Learn about Schoolmate, a trusted school ERP platform helping institutions streamline academic and administrative workflows with secure cloud technology.',
      keywords:
        'about schoolmate, school ERP company, school software provider India, education technology platform',
      type: 'website',
    },
    features: {
      title: '100+ School ERP Features | Schoolmate School Management Software',
      description:
        'Explore 100+ Schoolmate features including academics, attendance, fee collection, transport tracking, exam management, communication, and analytics.',
      keywords:
        'school ERP features, attendance tracking, fee management, exam management software, transport management software, school analytics',
      type: 'website',
    },
    integrations: {
      title: 'Integrations | Schoolmate School ERP Software',
      description:
        'Connect Schoolmate with biometrics, payment gateways, SMS services, and other tools to run your institution with a seamless digital workflow.',
      keywords:
        'school software integrations, biometric integration, payment gateway school ERP, SMS integration school software',
      type: 'website',
    },
    clients: {
      title: 'Our Clients | Schools Using Schoolmate ERP',
      description:
        'See schools and colleges using Schoolmate ERP across India and read client feedback on improved academic and operational efficiency.',
      keywords:
        'schoolmate clients, school ERP testimonials, schools using school software, education ERP case studies',
      type: 'website',
    },
    contact: {
      title: 'Contact Schoolmate | Book Free School ERP Demo',
      description:
        'Contact Schoolmate for a free demo and consultation. Discover how our school ERP can simplify administration, academics, fees, and communication.',
      keywords:
        'contact schoolmate, school ERP demo, school software enquiry, book school software demo',
      type: 'website',
    },
    pricing: {
      title: 'Pricing Plans | Schoolmate School Management Software',
      description:
        'Compare Schoolmate Silver, Gold, and Premium plans for schools. Choose the right school ERP package with features for every institution size.',
      keywords:
        'school ERP pricing, school software plans, school management software cost, school ERP packages',
      type: 'website',
    },
    'free-apps': {
      title: 'Free Apps | Schoolmate Education Apps for Schools',
      description:
        'Discover Schoolmate free apps built for students, teachers, and institutions to improve communication, learning workflows, and operations.',
      keywords:
        'school apps, free education apps, teacher app, student app, parent communication app',
      type: 'website',
    },
    reports: {
      title: 'Reports & Analytics | Schoolmate School ERP',
      description:
        'Generate smart school reports and analytics with Schoolmate to track attendance, fee collections, performance, and operational KPIs.',
      keywords:
        'school reports software, school analytics, ERP reports, academic reports, fee collection reports',
      type: 'website',
    },
    'join-us': {
      title: 'Join Us | Careers at Schoolmate',
      description:
        'Explore career opportunities at Schoolmate and join a fast-growing team building impactful school ERP and education technology products.',
      keywords: 'schoolmate careers, edtech jobs, software jobs in education, join schoolmate',
      type: 'website',
    },
    certificates: {
      title: 'Certificates | Schoolmate Trust & Compliance',
      description:
        'View Schoolmate certificates and trust credentials that demonstrate our commitment to quality, security, and reliable school ERP services.',
      keywords: 'schoolmate certificates, school ERP certifications, software trust and compliance',
      type: 'website',
    },
    news: {
      title: 'Schoolmate in News | Updates & Announcements',
      description:
        'Read Schoolmate announcements, media mentions, and product updates related to school ERP innovation and education technology.',
      keywords:
        'schoolmate news, school ERP updates, education software news, product announcements',
      type: 'article',
    },
    privacy: {
      title: 'Privacy Policy | Schoolmate',
      description:
        'Read Schoolmate privacy policy to understand how we collect, process, and protect data for schools, students, staff, and parents.',
      keywords: 'schoolmate privacy policy, data privacy school ERP, education software privacy',
      type: 'website',
    },
    'terms-of-use': {
      title: 'Terms of Use | Schoolmate',
      description:
        'Review Schoolmate terms of use, service conditions, and user responsibilities for accessing school ERP software and related services.',
      keywords: 'schoolmate terms, terms of use, school ERP terms and conditions',
      type: 'website',
    },
    'solutions/academic-management': {
      title: 'Academic Management Software | Schoolmate ERP Solution',
      description:
        'Manage classes, curriculum, timetable, and assessments with Schoolmate academic management solution for modern schools and colleges.',
      keywords:
        'academic management software, school timetable software, curriculum management, education ERP',
      type: 'website',
    },
    'solutions/student-management': {
      title: 'Student Management Software | Schoolmate ERP Solution',
      description:
        'Centralize student profiles, admissions, records, and communication with Schoolmate student management solution.',
      keywords:
        'student management software, student information system, school admission software',
      type: 'website',
    },
    'solutions/teacher-management': {
      title: 'Teacher Management Software | Schoolmate ERP Solution',
      description:
        'Track teacher attendance, class assignments, leave workflows, and performance with Schoolmate teacher management module.',
      keywords:
        'teacher management software, teacher attendance software, staff management school ERP',
      type: 'website',
    },
    'solutions/fee-management': {
      title: 'Fee Management Software | Schoolmate ERP Solution',
      description:
        'Automate fee structures, reminders, receipts, and payment reconciliation using Schoolmate fee management software.',
      keywords:
        'fee management software, school fee collection software, online school fees payment',
      type: 'website',
    },
    'solutions/transport-management': {
      title: 'Transport Management Software | Schoolmate ERP Solution',
      description:
        'Manage routes, stops, driver records, transport attendance, and bus tracking with Schoolmate transport management solution.',
      keywords: 'school transport software, bus tracking software, transport management school ERP',
      type: 'website',
    },
    'solutions/attendance-management': {
      title: 'Attendance Management Software | Schoolmate ERP Solution',
      description:
        'Track student and staff attendance with biometric support, real-time updates, and detailed reports in Schoolmate ERP.',
      keywords:
        'attendance management software, biometric attendance school software, student attendance system',
      type: 'website',
    },
    'solutions/finance-management': {
      title: 'Finance Management Software | Schoolmate ERP Solution',
      description:
        'Control school budgets, expenses, accounting workflows, and financial reports using Schoolmate finance management module.',
      keywords:
        'school finance software, accounting software for schools, expense management school ERP',
      type: 'website',
    },
    'solutions/exam-management': {
      title: 'Exam Management Software | Schoolmate ERP Solution',
      description:
        'Plan exams, manage grading, publish results, and generate report cards with Schoolmate exam management software.',
      keywords:
        'exam management software, school result software, report card generator, grading software',
      type: 'website',
    },
  };

  constructor(
    private readonly titleService: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  updateForUrl(url: string): void {
    const path = this.normalizePath(url);
    const config = this.seoByPath[path] ?? this.fallbackConfig;
    const canonical = this.buildCanonical(path);

    this.titleService.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ name: 'author', content: this.siteName });

    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:image', content: this.defaultOgImage });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.defaultOgImage });
    this.meta.updateTag({ name: 'twitter:url', content: canonical });

    this.updateCanonical(canonical);
    this.updateJsonLd(path, config, canonical);
  }

  private normalizePath(url: string): string {
    const cleanUrl = (url || '/').split('?')[0].split('#')[0];
    if (cleanUrl === '/' || cleanUrl === '') {
      return '';
    }

    return cleanUrl.replace(/^\/+|\/+$/g, '');
  }

  private buildCanonical(path: string): string {
    return path ? `${this.baseUrl}/${path}` : `${this.baseUrl}/`;
  }

  private updateCanonical(canonicalUrl: string): void {
    let canonical = this.document.head.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }

  private updateJsonLd(path: string, config: SeoRouteConfig, canonicalUrl: string): void {
    const existing = this.document.getElementById('dynamic-jsonld');
    if (existing) {
      existing.remove();
    }

    const breadcrumbItems = this.buildBreadcrumb(path);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: this.siteName,
          url: this.baseUrl,
          logo: `${this.baseUrl}/logo.png`,
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+91-8074041675',
              contactType: 'customer support',
              areaServed: 'IN',
              availableLanguage: ['en', 'hi'],
            },
          ],
        },
        {
          '@type': 'WebSite',
          name: this.siteName,
          url: this.baseUrl,
          inLanguage: 'en-IN',
        },
        {
          '@type': 'WebPage',
          name: config.title,
          description: config.description,
          url: canonicalUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: this.siteName,
            url: this.baseUrl,
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Schoolmate ERP',
          applicationCategory: 'EducationApplication',
          operatingSystem: 'Web, Android, iOS',
          description:
            'Schoolmate is a complete school management ERP platform with modules for academics, fees, attendance, transport, exams, and communication.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            description: 'Free demo available',
          },
          url: this.baseUrl,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        },
      ],
    };

    const script = this.document.createElement('script');
    script.id = 'dynamic-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }

  private buildBreadcrumb(path: string): Array<Record<string, unknown>> {
    if (!path) {
      return [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${this.baseUrl}/`,
        },
      ];
    }

    const segments = path.split('/');
    const breadcrumbs: Array<Record<string, unknown>> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${this.baseUrl}/`,
      },
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: this.formatSegment(segment),
        item: `${this.baseUrl}${currentPath}`,
      });
    });

    return breadcrumbs;
  }

  private formatSegment(segment: string): string {
    return segment
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}
