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
        background: #f8f9fc;
      }
      .contact-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
      }

      .contact-info-card {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }
      .contact-info-card:hover {
        border-color: rgba(40, 86, 163, 0.2);
        box-shadow: 0 16px 34px rgba(40, 86, 163, 0.12);
        background: linear-gradient(135deg, #ffffff, #f5f9ff);
      }
      .contact-info-card h3 {
        font-size: 1.8rem;
        margin-bottom: 16px;
        color: #1a2a4a;
      }
      .contact-info-card p {
        color: #666;
        margin-bottom: 30px;
      }
      .social-note {
        margin-top: 16px;
        color: #1a2a4a;
      }

      .info-list {
        list-style: none;
        padding: 0;
      }
      .info-list li {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
        align-items: flex-start;
      }
      .info-list .material-icon {
        color: #2856a3;
        font-size: 24px;
      }
      .info-list strong {
        display: block;
        color: #1a2a4a;
        font-size: 1rem;
      }
      .info-list p {
        margin: 0;
        font-size: 0.95rem;
      }

      .contact-form-card {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }
      .contact-form-card:hover {
        box-shadow: 0 16px 34px rgba(40, 86, 163, 0.12);
        background: linear-gradient(135deg, #ffffff, #f7fbff);
      }
      .form-group {
        margin-bottom: 20px;
      }
      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #1a2a4a;
      }
      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-family: inherit;
      }
      .btn-submit {
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #2856a3, #5b2d8e);
        color: white;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3s;
      }
      .btn-submit:hover {
        opacity: 0.9;
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
