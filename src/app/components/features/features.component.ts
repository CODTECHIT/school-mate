import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  @Input() maxItems: number | null = null;
  @Input() showViewAllButton = false;

  get visibleFeatures() {
    if (!this.maxItems || this.maxItems <= 0) {
      return this.features;
    }

    return this.features.slice(0, this.maxItems);
  }

  features = [
    {
      icon: 'receipt_long',
      title: 'Accounts & Fee Management',
      description:
        'Complete fee automation with concessions, fines, defaulters, online payments and detailed financial reports.',
    },
    {
      icon: 'school',
      title: 'Student Information System',
      description:
        'Manage student records, parent details, categories, documents, ID cards and academic history.',
    },
    {
      icon: 'family_restroom',
      title: 'Siblings Management',
      description:
        'Link siblings, unified fee management, family details and relationship mapping.',
    },
    {
      icon: 'groups',
      title: 'Teacher & Employee Management',
      description:
        'Staff profiles, roles, permissions, attendance, schedules and document uploads.',
    },
    {
      icon: 'fact_check',
      title: 'Student Attendance System',
      description:
        'Daily attendance, late remarks, leave requests, reports and instant notifications.',
    },
    {
      icon: 'fingerprint',
      title: 'Biometric Attendance Integration',
      description: 'RFID, face recognition and fingerprint devices with instant cloud sync.',
    },
    {
      icon: 'assignment',
      title: 'Homework & Classwork Updates',
      description:
        'Upload homework, attachments, reminders, classwork updates and parent notifications.',
    },
    {
      icon: 'quiz',
      title: 'Examination Management',
      description:
        'Create exams, schedules, marks entry, grading, auto calculations and result reports.',
    },
    {
      icon: 'article',
      title: 'Online Marksheet Generator',
      description:
        '100+ customizable marksheet templates with auto calculations and printable PDFs.',
    },
    {
      icon: 'calendar_view_week',
      title: 'Timetable Management',
      description:
        'Auto timetable creation, conflict detection, period allocation and teacher mapping.',
    },
    {
      icon: 'directions_bus',
      title: 'Transport Management',
      description:
        'Routes, vehicles, drivers, transport fees, pickup points and daily trip reports.',
    },
    {
      icon: 'location_on',
      title: 'GPS Bus Tracking',
      description: 'Live GPS tracking, driver app, route analytics and parent live tracking.',
    },
    {
      icon: 'notifications_active',
      title: 'Push Notifications',
      description: 'Unlimited app notifications to classes, groups or entire school.',
    },
    {
      icon: 'sms',
      title: 'SMS Alerts',
      description: 'Low-cost transactional SMS alerts for attendance, fees, exams and emergencies.',
    },
    {
      icon: 'videocam',
      title: 'Online Classes',
      description: 'Share Zoom/Meet links, class schedules and online learning integrations.',
    },
    {
      icon: 'menu_book',
      title: 'Study Materials',
      description: 'Upload notes, PDFs, videos, question papers and downloadable resources.',
    },
    {
      icon: 'workspace_premium',
      title: 'Certificate Generator',
      description: 'Generate TC, Bonafide, Conduct, Study and custom certificates instantly.',
    },
    {
      icon: 'photo_library',
      title: 'School Gallery & Events',
      description: 'Upload event photos, achievements, notices, circulars and announcements.',
    },
    {
      icon: 'how_to_reg',
      title: 'Online Admission System',
      description: 'Enquiry tracking, admission forms, follow-ups and student onboarding.',
    },
    {
      icon: 'manage_search',
      title: 'Lead & Enquiry Management',
      description: 'Track enquiries, follow-ups, reminders and source-wise analytics.',
    },
    {
      icon: 'insights',
      title: 'Reports & Analytics',
      description: '100+ reports for fees, attendance, exams, transport, staff and students.',
    },
    {
      icon: 'dashboard',
      title: 'Smart Dashboard',
      description: 'Live statistics of students, fees, exams, attendance and notifications.',
    },
    {
      icon: 'account_balance_wallet',
      title: 'Expense Management',
      description: 'Record expenses, categories, vendor payments and monthly summaries.',
    },
    {
      icon: 'inventory_2',
      title: 'Inventory & Asset Tracking',
      description: 'Track stock, issue items, purchases and asset history.',
    },
    {
      icon: 'hotel',
      title: 'Hostel Management',
      description: 'Room allocation, hostel fees, attendance, mess details and warden info.',
    },
    {
      icon: 'badge',
      title: 'ID Card Designer',
      description: 'Create and print student and staff ID cards with QR/barcode support.',
    },
    {
      icon: 'folder',
      title: 'Document Management',
      description: 'Upload student and staff documents, certificates and secure file storage.',
    },
    {
      icon: 'event_busy',
      title: 'Leave Management',
      description: 'Apply, approve and track student and staff leave requests.',
    },
    {
      icon: 'feedback',
      title: 'Feedback & Complaints',
      description: 'Parents can submit complaints or feedback with status tracking.',
    },
    {
      icon: 'emoji_events',
      title: 'Student Activity Tracker',
      description: 'Track activities, competitions, achievements and participation.',
    },
    {
      icon: 'calculate',
      title: 'Financial Accounting (Basic)',
      description: 'Income/expense reports, category summaries and cashbook statements.',
    },
    {
      icon: 'qr_code_scanner',
      title: 'QR Attendance System',
      description: 'QR-based student and staff attendance using mobile scanning.',
    },
    {
      icon: 'upload_file',
      title: 'Bulk Data Import',
      description: 'Upload students, staff, fee structures, subjects and records via Excel.',
    },
    {
      icon: 'print',
      title: 'Bulk Printing',
      description: 'Print marksheets, certificates, receipts, ID cards and documents.',
    },
    {
      icon: 'security',
      title: 'Security & Permissions',
      description: 'Role-based permissions, restricted access and multi-level authentication.',
    },
    {
      icon: 'cloud_done',
      title: 'Automatic Cloud Backup',
      description: 'Daily auto backup, secure storage and encrypted data protection.',
    },
    {
      icon: 'receipt',
      title: 'Custom Fee Receipt Generator',
      description: 'Design and customize fee receipts with branding and contact details.',
    },
    {
      icon: 'co_present',
      title: 'Staff Attendance',
      description: 'Daily attendance, in/out tracking, reports and alerts.',
    },
    {
      icon: 'payments',
      title: 'Payment Gateway Integration',
      description: 'Online fee payments via UPI, cards, wallets, net banking and receipts.',
    },
    {
      icon: 'schedule',
      title: 'Scheduler & Reminders',
      description: 'Auto reminders for homework, fees, exams, events and follow-ups.',
    },
    {
      icon: 'class',
      title: 'Class & Section Manager',
      description: 'Create classes, sections, promote students and manage class allocation.',
    },
    {
      icon: 'auto_stories',
      title: 'Subject & Curriculum Manager',
      description: 'Create subjects, map teachers and define academic structures.',
    },
    {
      icon: 'event_note',
      title: 'Exam Planner',
      description: 'Auto-generate exam schedules, hall tickets and seat plans.',
    },
    {
      icon: 'chat',
      title: 'Internal Messaging System',
      description: 'Teacher-student-parent communication via app messaging.',
    },
    {
      icon: 'health_and_safety',
      title: 'Student Health Records',
      description: 'Track medical details, vaccinations, measurements and health notes.',
    },
    {
      icon: 'directions_bus_filled',
      title: 'Transport Attendance',
      description: 'Bus boarding/deboarding attendance with alerts to parents.',
    },
    {
      icon: 'computer',
      title: 'Online Examination',
      description: 'MCQ tests, subjective tests, auto evaluation and student ranking.',
    },
    {
      icon: 'phone_android',
      title: 'Parent Mobile App',
      description: 'Complete parent app with homework, attendance, fee, timetable and updates.',
    },
    {
      icon: 'tablet_android',
      title: 'Teacher Mobile App',
      description: 'Homework upload, attendance, exams, communication and class management.',
    },
  ];
}
