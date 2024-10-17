import React from "react";
import Head from "next/head";
import { Shield, Book, Clock } from "lucide-react";

interface PolicySectionProps {
  title: string;
  content: string;
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

const DataPolicy: React.FC = () => {
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
              Data <span className="text-[#e6f7f4]">Policy</span>
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
              At Reli.Ai, we prioritize the privacy and security of our
              customers' data. We have designed our data usage and retention
              policies in accordance with OpenAI's guidelines to ensure the
              responsible handling of your information.
            </p>
          </div>

          <PolicySection
            icon={<Book className="w-8 h-8 text-white" />}
            title="Introduction"
            content="At Reli.Ai, we prioritize the privacy and security of our customers' data. We have designed our data usage and retention policies in accordance with OpenAI's guidelines to ensure the responsible handling of your information. This Data Policy outlines our practices and procedures for data submitted through our Reli.Ai toolbox, which is built on top of the OpenAI API"
          />

          <PolicySection
            icon={<Shield className="w-8 h-8 text-white" />}
            title="Data Usage"
            content="Starting from April 1, 2023, Reli.Ai and OpenAI will not use data submitted by customers via our API to train or improve our models, unless you explicitly decide to share your data with us for this purpose. You can opt-in to share data during the tool-making process.By default, we will not use data submitted by customers via our API to train OpenAI models or improve our service offerings. Data submitted by the user for fine-tuning will only be used to fine-tune the customer's model. However, we will allow users to opt-in to share their data to improve model performance. Sharing your data will ensure that future iterations of the model improve for your use cases. Data submitted to the API prior to April 1, 2023, may have been used for improvements if the customer had not previously opted out of sharing data."
          />

          <PolicySection
            icon={<Clock className="w-8 h-8 text-white" />}
            title="Data Retention"
            content="Any data sent through the API will be retained for abuse and misuse monitoring purposes for a maximum of 30 days, after which it will be deleted (unless otherwise required by law). This applies to both user prompts and completions, as well as training data submitted to fine-tune models via the Files endpoint. We refer to this data as API data. A limited number of authorized Reli.Ai and OpenAI employees, as well as specialized third-party contractors subject to confidentiality and security obligations, can access this data solely to investigate and verify suspected abuse. Enterprise customers deploying use cases with a low likelihood of misuse may request not to have API data stored at all, including for safety monitoring and prevention. OpenAI may still have content classifiers flag when data is suspected to contain platform abuse. Data submitted by the user through the Files endpoint, for instance, to fine-tune a model, is retained until the user deletes the file.For more information on the technical protections, security certifications, data storage, encryption, and other relevant details, please refer to our Frequently Asked Questions section above.If you have any questions or concerns about our data policy, please contact us at support@reli.ai."
          />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center bg-gray-100">
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

export default DataPolicy;
