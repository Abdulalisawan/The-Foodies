import React from 'react'

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using The Foodies platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on The Foodies for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on The Foodies\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or "mirror" the materials on any other server'
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on The Foodies are provided on an \'as is\' basis. The Foodies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: '4. Limitations',
      content: 'In no event shall The Foodies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Foodies, even if The Foodies or a Foodies authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on The Foodies could include technical, typographical, or photographic errors. The Foodies does not warrant that any of the materials on its website are accurate, complete, or current. The Foodies may make changes to the materials contained on its website at any time without notice.'
    },
    {
      title: '6. Materials and Links',
      content: 'The Foodies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Foodies of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: '7. Modifications',
      content: 'The Foodies may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which The Foodies operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    },
    {
      title: '9. User Reviews and Submissions',
      content: 'By submitting a review or any content to The Foodies, you grant The Foodies a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.\n\nYou represent and warrant that you own or have the necessary rights to the content you submit and that such content does not infringe any third-party intellectual property rights or violate any laws.'
    },
    {
      title: '10. Prohibited Conduct',
      content: 'Users agree not to:\n\n• Post false, defamatory, abusive, or otherwise unlawful content\n• Harass, threaten, or intimidate other users\n• Violate any laws or regulations\n• Attempt to gain unauthorized access to The Foodies systems\n• Engage in any form of spam or unsolicited solicitation\n• Post content that infringes third-party intellectual property rights'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg md:text-xl text-emerald-50">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            Welcome to The Foodies. These terms of service ("Terms") govern your use of our website and services. By accessing and using The Foodies, you agree to comply with these Terms. If you do not agree to these Terms, please do not use our platform.
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
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 mb-3">Contact Us</h3>
            <p className="text-emerald-800 dark:text-emerald-200">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-emerald-800 dark:text-emerald-200 mt-2">
              Email: <a href="mailto:hello@thefoodies.com" className="font-semibold hover:underline">hello@thefoodies.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
