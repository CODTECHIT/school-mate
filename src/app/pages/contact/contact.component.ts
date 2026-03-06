import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, CtaComponent],
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
                  href="https://www.facebook.com/people/Schoolmate-ERP-Software/61563897116374/?sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Facebook</a
                >
              </div>
            </div>
          </div>

          <div class="contact-form-card">
            <form>
              <div class="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <label>Mobile Number *</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div class="form-group">
                <label>School Name *</label>
                <input type="text" placeholder="Enter school name" />
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter city" />
              </div>
              <div class="form-group">
                <label>Website</label>
                <input type="text" placeholder="Enter website (optional)" />
              </div>
              <div class="form-group">
                <label>Address *</label>
                <input type="text" placeholder="Enter address" />
              </div>
              <div class="form-group">
                <label>Your Message</label>
                <textarea rows="4" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" class="btn-submit">SUBMIT</button>
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
      .btn-submit {
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
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
