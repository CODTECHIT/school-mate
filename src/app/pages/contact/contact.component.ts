import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CtaComponent],
  template: `
    <div class="page-header">
      <h1>We're Always Ready</h1>
      <p>Get in touch with your Technology Partner</p>
    </div>

    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-grid">
          <div class="contact-info-card">
            <h3>Contact Us</h3>
            <p>Reach our team for demos, support, and implementation guidance.</p>

            <ul class="info-list">
              <li>
                <span class="material-icon">phone</span>
                <div>
                  <strong>Phone Number</strong>
                  <p>+91 807 404 1675</p>
                </div>
              </li>
              <li>
                <span class="material-icon">email</span>
                <div>
                  <strong>Email</strong>
                  <p>sales@schoolmate.co.in</p>
                </div>
              </li>
              <li>
                <span class="material-icon">location_on</span>
                <div>
                  <strong>Address</strong>
                  <p>Plot No 241, Road No. 3, Ameenpur, Hyderabad, Miyapur, Telangana 502032</p>
                </div>
              </li>
            </ul>

            <div class="social-note">
              <strong>Connect with us on social media:</strong>
              <div class="social-links">
                <a
                  href="https://www.youtube.com/@schoolmate-erp"
                  target="_blank"
                  rel="noopener noreferrer"
                  >YouTube</a
                >
                <a
                  href="https://www.linkedin.com/in/schoolmate-erp-software-68b651320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >LinkedIn</a
                >
                <a
                  href="https://www.instagram.com/schoolmate_erp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Instagram</a
                >
                <a
                  href="https://www.facebook.com/people/schoolmate-ERP-Software/61563897116374/?sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Facebook</a
                >
              </div>
            </div>
          </div>

          <div class="contact-form-card">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label>Full Name *</label>
                <input type="text" formControlName="fullName" placeholder="Enter your name" />
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('fullName')?.touched &&
                    contactForm.get('fullName')?.errors?.['required']
                  "
                  >Full Name is required</span
                >
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('fullName')?.touched &&
                    contactForm.get('fullName')?.errors?.['minlength']
                  "
                  >Name must be at least 2 characters</span
                >
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" formControlName="email" placeholder="Enter your email" />
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('email')?.touched &&
                    contactForm.get('email')?.errors?.['required']
                  "
                  >Email is required</span
                >
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('email')?.touched && contactForm.get('email')?.errors?.['email']
                  "
                  >Please enter a valid email</span
                >
              </div>
              <div class="form-group">
                <label>Mobile Number *</label>
                <input type="tel" formControlName="mobile" placeholder="Enter your phone number" />
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('mobile')?.touched &&
                    contactForm.get('mobile')?.errors?.['required']
                  "
                  >Mobile number is required</span
                >
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('mobile')?.touched &&
                    contactForm.get('mobile')?.errors?.['pattern']
                  "
                  >Please enter a valid 10-digit mobile number</span
                >
              </div>
              <div class="form-group">
                <label>School Name *</label>
                <input type="text" formControlName="schoolName" placeholder="Enter school name" />
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('schoolName')?.touched &&
                    contactForm.get('schoolName')?.errors?.['required']
                  "
                  >School Name is required</span
                >
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" formControlName="city" placeholder="Enter city" />
              </div>
              <div class="form-group">
                <label>Website</label>
                <input
                  type="text"
                  formControlName="website"
                  placeholder="Enter website (optional)"
                />
              </div>
              <div class="form-group">
                <label>Address *</label>
                <input type="text" formControlName="address" placeholder="Enter address" />
                <span
                  class="error-message"
                  *ngIf="
                    contactForm.get('address')?.touched &&
                    contactForm.get('address')?.errors?.['required']
                  "
                  >Address is required</span
                >
              </div>
              <div class="form-group">
                <label>Your Message</label>
                <textarea
                  formControlName="message"
                  rows="4"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button type="submit" class="btn-submit" [disabled]="contactForm.invalid">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <app-cta></app-cta>
  `,
  styles: [
    `
      .page-header {
        background: linear-gradient(135deg, #2856a3, #5b2d8e);
        padding: 120px 24px 60px;
        text-align: center;
        color: white;
      }
      .page-header h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0 0 12px;
      }
      .page-header p {
        margin: 0;
        font-size: 1.15rem;
        opacity: 0.95;
      }

      .contact-section {
        padding: 100px 24px;
        background: radial-gradient(circle at 15% 20%, #eef4ff 0%, #f8f9fc 45%, #f4f0ff 100%);
      }
      .contact-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        align-items: start;
      }

      .contact-info-card {
        --accent-start: #2f6fe0;
        --accent-end: #4f46e5;
        background: linear-gradient(160deg, #ffffff, #f8fbff);
        padding: 40px;
        border-radius: 20px;
        border: 1px solid color-mix(in srgb, var(--accent-start) 16%, transparent);
        box-shadow: 0 10px 30px color-mix(in srgb, var(--accent-start) 12%, transparent);
        transition: all 0.3s ease;
      }
      .contact-info-card:hover {
        border-color: color-mix(in srgb, var(--accent-start) 35%, transparent);
        box-shadow: 0 16px 34px color-mix(in srgb, var(--accent-start) 22%, transparent);
        background: linear-gradient(
          135deg,
          #ffffff,
          color-mix(in srgb, var(--accent-start) 9%, white),
          color-mix(in srgb, var(--accent-end) 8%, white)
        );
      }
      .contact-info-card h3 {
        font-size: 1.8rem;
        margin: 0 0 12px;
        color: #1a2a4a;
      }
      .contact-info-card p {
        color: #5c6782;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      .social-note {
        margin-top: 8px;
        font-size: 0.9rem;
        color: #1a2a4a;
      }

      .social-links {
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .social-links a {
        display: inline-flex;
        align-items: center;
        padding: 7px 12px;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--accent-start);
        text-decoration: none;
        background: color-mix(in srgb, var(--accent-start) 10%, white);
        border: 1px solid color-mix(in srgb, var(--accent-start) 20%, transparent);
        transition: all 0.25s ease;
      }

      .social-links a:hover {
        color: #fff;
        background: linear-gradient(135deg, #2856a3, #5b2d8e);
        border-color: transparent;
        transform: translateY(-1px);
      }

      .info-list {
        list-style: none;
        padding: 0;
      }
      .info-list li {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
        align-items: flex-start;
        padding: 10px 10px;
        border-radius: 12px;
        background: linear-gradient(
          135deg,
          #ffffff,
          color-mix(in srgb, var(--accent-start) 8%, white)
        );
        border: 1px solid color-mix(in srgb, var(--accent-start) 12%, transparent);
      }
      .info-list .material-icon {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          135deg,
          color-mix(in srgb, var(--accent-start) 18%, white),
          color-mix(in srgb, var(--accent-end) 12%, white)
        );
        color: var(--accent-start);
        font-size: 18px;
        margin-top: 2px;
      }
      .info-list strong {
        display: block;
        color: #1a2a4a;
        font-size: 0.95rem;
        margin-bottom: 4px;
      }
      .info-list p {
        margin: 0;
        font-size: 0.86rem;
        line-height: 1.45;
      }

      .contact-form-card {
        --accent-start: #8b5cf6;
        --accent-end: #7c3aed;
        background: linear-gradient(160deg, #ffffff, #fcfaff);
        padding: 40px;
        border-radius: 20px;
        border: 1px solid color-mix(in srgb, var(--accent-start) 16%, transparent);
        box-shadow: 0 10px 30px color-mix(in srgb, var(--accent-start) 12%, transparent);
        transition: all 0.3s ease;
      }
      .contact-form-card:hover {
        border-color: color-mix(in srgb, var(--accent-start) 35%, transparent);
        box-shadow: 0 16px 34px color-mix(in srgb, var(--accent-start) 22%, transparent);
        background: linear-gradient(
          135deg,
          #ffffff,
          color-mix(in srgb, var(--accent-start) 9%, white),
          color-mix(in srgb, var(--accent-end) 8%, white)
        );
      }
      .form-group {
        margin-bottom: 16px;
      }
      .form-group label {
        display: block;
        margin-bottom: 6px;
        font-weight: 600;
        font-size: 0.88rem;
        color: #1a2a4a;
      }
      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid color-mix(in srgb, var(--accent-start) 16%, #ddd);
        border-radius: 12px;
        background: #fff;
        font-family: inherit;
        transition: all 0.25s ease;
      }
      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: color-mix(in srgb, var(--accent-start) 46%, transparent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-start) 18%, transparent);
      }
      .form-group input.error,
      .form-group textarea.error {
        border-color: #ef4444;
      }
      .error-message {
        display: block;
        color: #ef4444;
        font-size: 0.75rem;
        margin-top: 4px;
      }
      .btn-submit:disabled {
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #2856a3, #5b2d8e);
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        letter-spacing: 0.4px;
        box-shadow: 0 10px 22px rgba(40, 86, 163, 0.25);
        transition: 0.3s;
      }
      .btn-submit:hover {
        filter: brightness(1.05);
        transform: translateY(-2px);
      }
      .btn-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }

      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }

        .contact-info-card,
        .contact-form-card {
          padding: 20px 14px;
          border-radius: 14px;
        }

        .contact-info-card h3 {
          font-size: 1.35rem;
          margin-bottom: 10px;
        }

        .form-group {
          margin-bottom: 14px;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 12px;
          border-radius: 8px;
        }
      }
    `,
  ],
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private meta: Meta,
    private title: Title
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      schoolName: ['', [Validators.required]],
      city: [''],
      website: [''],
      address: ['', [Validators.required]],
      message: [''],
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.title.setTitle('Contact Schoolmate | Get Free Demo - School Management Software');
    this.meta.updateTag({ name: 'description', content: 'Contact Schoolmate for free demo of school management software. Get 5000 FREE SMS credits. Call +91 8074041675 or fill the contact form. 5000+ schools trust Schoolmate.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact schoolmate, school software demo, get school ERP demo, contact school management software, school software enquiry' });
    this.meta.updateTag({ property: 'og:title', content: 'Contact Schoolmate | Get Free Demo' });
    this.meta.updateTag({ property: 'og:description', content: 'Contact us for free demo of school management software.' });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Thank you for contacting us! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}
