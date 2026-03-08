import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { FeaturesPageComponent } from './pages/features/features.component';
import { IntegrationsPageComponent } from './pages/integrations/integrations.component';
import { ClientsPageComponent } from './pages/clients/clients.component';
import { ContactPageComponent } from './pages/contact/contact.component';

// New Imports
import { JoinUs } from './pages/join-us/join-us';
import { Certificates } from './pages/certificates/certificates';
import { InTheNews } from './pages/news/news';
import { OurFreeApps } from './pages/free-apps/free-apps';
import { Reports } from './pages/reports/reports';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsOfUse } from './pages/terms-of-use/terms-of-use';
import { PricingPageComponent } from './pages/pricing/pricing.component';

// Solutions
import { AcademicManagement } from './pages/solutions/academic-management/academic-management';
import { StudentManagement } from './pages/solutions/student-management/student-management';
import { TeacherManagement } from './pages/solutions/teacher-management/teacher-management';
import { FeeManagement } from './pages/solutions/fee-management/fee-management';
import { TransportManagement } from './pages/solutions/transport-management/transport-management';
import { AttendanceManagement } from './pages/solutions/attendance-management/attendance-management';
import { FinanceManagement } from './pages/solutions/finance-management/finance-management';
import { ExamManagement } from './pages/solutions/exam-management/exam-management';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'integrations', component: IntegrationsPageComponent },
  { path: 'clients', component: ClientsPageComponent },
  { path: 'contact', component: ContactPageComponent },

  // Company Links
  { path: 'join-us', component: JoinUs },
  { path: 'certificates', component: Certificates },
  { path: 'news', component: InTheNews },

  // Quick Links / Solutions
  { path: 'solutions/academic-management', component: AcademicManagement },
  { path: 'solutions/student-management', component: StudentManagement },
  { path: 'solutions/teacher-management', component: TeacherManagement },
  { path: 'solutions/fee-management', component: FeeManagement },
  { path: 'solutions/transport-management', component: TransportManagement },
  { path: 'solutions/attendance-management', component: AttendanceManagement },
  { path: 'solutions/finance-management', component: FinanceManagement },
  { path: 'solutions/exam-management', component: ExamManagement },

  // Important Links
  { path: 'free-apps', component: OurFreeApps },
  { path: 'reports', component: Reports },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'privacy', component: PrivacyPolicy },
  { path: 'privacy-policy', redirectTo: 'privacy', pathMatch: 'full' },
  { path: 'terms-of-use', component: TermsOfUse },

  { path: '**', redirectTo: '' },
];
