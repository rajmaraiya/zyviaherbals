import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Zyvia Herbals',
  description: 'Our commitment to making zyviaherbals.com accessible to all users, including those with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Zyvia Herbals is committed to ensuring our website is accessible to all users, 
            including those with disabilities. We believe everyone deserves equal access to wellness information and products.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Commitment</h2>
            <div className="prose max-w-none text-neutral-600 leading-relaxed">
              <p className="mb-4">
                At Zyvia Herbals, we are dedicated to making our website accessible to everyone, regardless of ability or technology. 
                We strive to ensure that all users can navigate our site, access our content, and purchase our wellness products 
                with ease and dignity.
              </p>
              <p>
                Our accessibility efforts are ongoing and evolve as we learn more about best practices and as technology advances. 
                We are committed to continuously improving the accessibility of our website and welcome feedback from our users.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Accessibility Standards</h2>
            <div className="prose max-w-none text-neutral-600">
              <p className="mb-6">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines explain how to make web content accessible to people with disabilities and more usable for everyone.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">WCAG 2.1 Principles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Operable:</strong> Interface components must be operable by all users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Understandable:</strong> Information and UI operation must be understandable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Robust:</strong> Content must be robust enough for various assistive technologies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Compliance Level</h3>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold text-blue-800">WCAG 2.1 Level AA</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      We strive to meet Level AA compliance standards, which covers the majority of accessibility barriers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Visual Design</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• High contrast color schemes</li>
                  <li>• Scalable fonts and layouts</li>
                  <li>• Clear visual hierarchy</li>
                  <li>• Alternative text for images</li>
                </ul>
              </div>
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.636-.491-3.156-1.343-4.243a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Screen Readers</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• Semantic HTML structure</li>
                  <li>• ARIA labels and descriptions</li>
                  <li>• Logical reading order</li>
                  <li>• Descriptive link text</li>
                </ul>
              </div>
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Keyboard Navigation</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• Tab-based navigation</li>
                  <li>• Visible focus indicators</li>
                  <li>• Logical tab order</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </div>
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Content Structure</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• Clear headings hierarchy</li>
                  <li>• Descriptive page titles</li>
                  <li>• Consistent navigation</li>
                  <li>• Error identification</li>
                </ul>
              </div>
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Motion & Animation</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• Respect motion preferences</li>
                  <li>• No auto-playing content</li>
                  <li>• Pause/stop controls</li>
                  <li>• Safe animation timing</li>
                </ul>
              </div>
              <div className="border border-neutral-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Forms & Controls</h3>
                <ul className="text-neutral-600 text-sm space-y-1">
                  <li>• Clear labels and instructions</li>
                  <li>• Error messages and help text</li>
                  <li>• Sufficient target sizes</li>
                  <li>• Form validation feedback</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Assistive Technology Compatibility</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Supported Technologies</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-600">Screen readers (NVDA, JAWS, VoiceOver)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-600">Voice recognition software</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-600">Keyboard-only navigation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-600">High contrast mode</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-600">Browser zoom up to 200%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Browser Compatibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-600">Chrome (latest 2 versions)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-600">Firefox (latest 2 versions)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-600">Safari (latest 2 versions)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-600">Microsoft Edge (latest 2 versions)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-600">Mobile browsers (iOS Safari, Android Chrome)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Known Issues & Limitations</h2>
            <div className="prose max-w-none text-neutral-600">
              <p className="mb-4">
                While we strive for full accessibility, we acknowledge that some areas may still present challenges. 
                We are actively working to address the following known issues:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">In Progress</h3>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Enhanced mobile screen reader support</li>
                    <li>• Additional keyboard shortcuts</li>
                    <li>• Improved color contrast in some areas</li>
                    <li>• Video caption enhancements</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Planned Improvements</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Enhanced voice navigation support</li>
                    <li>• Additional language support</li>
                    <li>• Improved form error messaging</li>
                    <li>• Third-party content accessibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Feedback & Support</h2>
            <div className="text-center mb-8">
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Your feedback helps us improve accessibility for everyone. If you encounter any barriers or have suggestions, 
                please don't hesitate to reach out to our accessibility team.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-neutral-300 text-sm">accessibility@zyviaherbals.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-neutral-300 text-sm">1-800-ZYVIA-ACCESS</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-neutral-300 text-sm">Available 24/7</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Accessibility Resources
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Learn more about web accessibility and find helpful tools and resources to enhance your browsing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.w3.org/WAI/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200"
              >
                Web Accessibility Initiative
              </a>
              <a 
                href="https://webaim.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
              >
                WebAIM Resources
              </a>
            </div>
          </section>

          <section className="text-center text-neutral-500 text-sm">
            <p>This accessibility statement was last updated on December 15, 2024.</p>
            <p className="mt-2">
              We are committed to continuously improving accessibility and welcome your ongoing feedback.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
