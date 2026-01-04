import React from 'react'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'The Foodies ("we," "us," "our," or "Company") operates the www.thefoodies.com website and The Foodies mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.'
    },
    {
      title: '2. Information Collection and Use',
      content: 'We collect several different types of information for various purposes to provide and improve our Service:\n\n• Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:\n  - Email address\n  - First name and last name\n  - Phone number\n  - Address, State, Province, ZIP/Postal code, City\n  - Cookies and Usage Data'
    },
    {
      title: '3. Usage Data',
      content: 'We may also collect information about how the Service is accessed and used ("Usage Data"). This may include information such as:\n\n• Your computer\'s Internet Protocol address\n• Browser type and version\n• The pages of our Service that you visit\n• The time and date of your visit\n• The time spent on those pages'
    },
    {
      title: '4. Cookies and Tracking Technologies',
      content: 'The Foodies uses cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.\n\nYou can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.'
    },
    {
      title: '5. Use of Data',
      content: 'The Foodies uses the collected data for various purposes:\n\n• To provide and maintain our Service\n• To notify you about changes to our Service\n• To allow you to participate in interactive features of our Service\n• To provide customer support\n• To gather analysis or valuable information so we can improve our Service\n• To monitor the usage of our Service\n• To detect, prevent and address technical and security issues'
    },
    {
      title: '6. Security of Data',
      content: 'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.'
    },
    {
      title: '7. Changes to This Privacy Policy',
      content: 'The Foodies may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.\n\nYou are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'
    },
    {
      title: '8. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us by email at hello@thefoodies.com or by visiting our contact page.'
    },
    {
      title: '9. Third-Party Services',
      content: 'The Foodies may use third-party services such as Firebase for authentication and data storage. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the practices of third-party service providers.'
    },
    {
      title: '10. User Consent',
      content: 'By using The Foodies, you consent to our Privacy Policy. If you do not agree to our privacy policies, please do not use our Service. Your continued use of the Service following the posting of revised Privacy Policy means that you accept and agree to the changes.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-emerald-50">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            The Foodies ("us", "we", or "our") operates the www.thefoodies.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 mb-3">Data Protection Rights</h3>
            <p className="text-emerald-800 dark:text-emerald-200 mb-3">
              You have the right to:
            </p>
            <ul className="text-emerald-800 dark:text-emerald-200 space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Request a copy of your data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
