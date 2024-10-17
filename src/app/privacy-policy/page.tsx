import React from "react";
import Head from "next/head";
import {
  Shield,
  FileText,
  UserCheck,
  Share,
  Server,
  Clock,
  RefreshCw,
  Mail,
} from "lucide-react";

interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  content,
  icon,
}) => (
  <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-[#1ABC9C] p-3 rounded-full mr-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-lg leading-relaxed text-gray-700">{content}</p>
    </div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Reli.Ai</title>
        <meta name="description" content="Our Privacy and Data Policy" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e6f7f4] via-white to-[#e6f7f4] text-gray-800">
        {/* Header */}
        <header className="py-20 text-center bg-[#1ABC9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQzZDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold mb-4 mt-6">
              Privacy <span className="text-[#e6f7f4]">Policy</span>
            </h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Protecting your privacy with transparency and care
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#1ABC9C] mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Reli.Ai, we are committed to safeguarding the privacy of our
              users and ensuring their data is handled with care and security.
            </p>
          </div>

          {/* Sections */}
          <PolicySection
            icon={<FileText className="w-8 h-8 text-white" />}
            title="Introduction"
            content="Reli.Ai is committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines our practices for collecting, using, and disclosing information that can be used to identify or contact a user.
"
          />

          <PolicySection
            icon={<UserCheck className="w-8 h-8 text-white" />}
            title="Information Collection"
            content="We collect personal information from users when they register on our website, such as name, email address, and other contact information. We also collect non-personally identifiable information, such as IP addresses, browser types, and website usage patterns.
"
          />

          <PolicySection
            icon={<Shield className="w-8 h-8 text-white" />}
            title="Information Use"
            content={
              <>
                <p className="text-lg text-gray-700 mb-4">
                  We use the collected information to provide, maintain, and
                  improve our services. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Registering users and managing their accounts</li>
                  <li>
                    Personalizing user experiences and providing customer
                    support
                  </li>
                  <li>
                    Communicating with users about our services, promotions, and
                    updates
                  </li>
                  <li>
                    Monitoring and analyzing usage patterns to improve our
                    services
                  </li>
                  <li>Ensuring the security and integrity of our systems</li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={<Share className="w-8 h-8 text-white" />}
            title="Information Sharing"
            content={
              <>
                <p className="text-lg text-gray-700 mb-4">
                  We do not sell or share personal information with third
                  parties, except:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>
                    As necessary to comply with legal obligations or protect our
                    rights
                  </li>
                  <li>
                    With service providers who help us operate our business,
                    subject to confidentiality agreements
                  </li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={<Server className="w-8 h-8 text-white" />}
            title="Data Storage and Security"
            content="We use Amazon Web Services (AWS) Amplify Server to store users' data securely. We employ industry-standard encryption and security measures to protect user data from unauthorized access or disclosure."
          />

          <PolicySection
            icon={<Clock className="w-8 h-8 text-white" />}
            title="Data Retention"
            content="We retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law."
          />

          <PolicySection
            icon={<RefreshCw className="w-8 h-8 text-white" />}
            title="Changes to This Privacy Policy"
            content="We may update this Privacy Policy from time to time. We encourage users to periodically review the policy for any changes.
"
          />

          <PolicySection
            icon={<Mail className="w-8 h-8 text-white" />}
            title="Contact Information"
            content="If you have any questions or concerns about our Privacy Policy, please contact us at support@reli.ai."
          />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center ">
          <p className="text-gray-600 mb-2">
            © 2024 Reli AI. All rights reserved.
          </p>
          <p className="text-gray-500">
            For questions or concerns, contact us at{" "}
            <a
              href="mailto:support@reli.ai"
              className="text-[#1ABC9C] hover:underline transition duration-300"
            >
              support@reli.ai
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
