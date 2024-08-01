import SectionTitle from "@/components/shared/SectionTitle";
import ServeCard from "./ServePoint/ServeCard";

const ServePoint = () => {
  return (
    <div className="bg-[#F4F8FF]">
      <div className="container mx-auto  ">
        <div className="py-16">
          <SectionTitle
            title="Tailoring Talent For Excellence"
            subtitle="What We Serve"
          />

          <div className="flex flex-col lg:flex-row gap-5 py-16 p-4 ">
            <ServeCard
              title="Develop & Training"
              description="Recruiting and training workers
based on employers’ specific needs"
              bageText="Training Programme"
            />

            <ServeCard
              title="Consulting Services"
              description="Providing guidance to
employers and employees throughout the process"
              bageText="Expert guidance"
            />

            <ServeCard
              title=" Management"
              description="   Ensuring projects         
are completed on time and within budget"
              bageText="Efficient delivery"
            />

            <ServeCard
              title="Ongoing Assistance"
              description=" Providing continuous
support to both employers and employees"
              bageText="Continuous Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServePoint;
