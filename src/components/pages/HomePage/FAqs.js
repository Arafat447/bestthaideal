import SectionTitle from "@/components/shared/SectionTitle";

const Faqs = () => {
  return (
    <section className="bg-[#F4F8FF]">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="text-center ">
          <div className="text-center ">
            <p className="font-bold lg:py-2 text-indigo-600 lg:text-xl">
              How it works with Best thai deal
            </p>

            <h1 className="lg:text-4xl text-2xl font-bold lg:py-4 py-2  text-brandColor">
              FAq s
            </h1>
          </div>
        </div>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 text-black">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I apply for a job through Best thai deal?
            </summary>
            <div className="px-4 pb-4">
              <p>
                You can apply for a job by visiting our job listings page,
                selecting the job you are interested in, and following the
                application instructions provided. Make sure to upload your
                updated resume and cover letter.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What kind of support do you offer to candidates?
            </summary>
            <div className="px-4 pb-4">
              <p>
                We offer a range of support services including resume building,
                interview preparation, and career counseling. Our goal is to
                help you present your best self to potential employers and
                secure the job that fits your skills and aspirations.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I prepare for an overseas job placement?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Preparation for an overseas job placement includes understanding
                the job requirements, cultural norms of the destination country,
                and ensuring all your travel documents are in order. We provide
                orientation sessions to help you get ready.
              </p>
              <p>
                We also recommend learning basic phrases in the local language
                and researching the country’s living conditions and work
                environment to better acclimate yourself upon arrival.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the process for companies to hire through Best thai deal?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Companies can start by contacting us through our website or
                directly reaching out to our sales team. We will discuss your
                hiring needs, create a customized recruitment plan, and then
                begin the process of sourcing and screening candidates to find
                the best fit for your organization.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Do you provide any training for candidates before their placement?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, we provide comprehensive training programs that include
                both technical skills and soft skills required for the job. This
                training ensures that our candidates are well-prepared to meet
                the expectations of their new roles and can adapt quickly to
                their new work environments.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What measures are in place to ensure the safety and well-being of
              candidates?
            </summary>
            <div className="px-4 pb-4">
              <p>
                We prioritize the safety and well-being of our candidates by
                thoroughly vetting employers and job placements. We also provide
                candidates with emergency contact information, access to support
                services, and regular check-ins to ensure their ongoing welfare.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
