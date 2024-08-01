import ButtonPrimary from "@/components/shared/ButtonPrimary";
import SectionTitle from "@/components/shared/SectionTitle";
// import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { LuHelpingHand } from "react-icons/lu";
import sideImage from "@/app/asset/image/largeImage/tourist-in-phuket.webp";
import Image from "next/image";

const OverviewSection = () => {
  return (
    <div>
      <div className="lg:p-16 pb-6">
        <div className=" gap-12 flex lg:flex-row flex-col  container mx-auto items-center justify-between">
          <div data-aos="zoom-in" className="   lg:w-1/2 w-full">
            {/* <Player
              className=" w-[300px] lg:w-[500px] lg:h-[500px] "
              autoplay
              loop
              src={animationData}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player> */}

            <Image
              className="rounded-xl"
              src={sideImage}
              width={700}
              height={500}
              alt="side image"
            />
          </div>
          <div className="text-center lg:text-left  lg:w-1/2 w-full   ">
            <SectionTitle
              title="Empowering Talent, Driving Success"
              subtitle=" About Best thai deal"
            />
            <p className="    text-sm lg:text-base px-4 lg:px-0  text-green-500 ">
              Govt. Approved Recruiting Agent. Licence No. RL-1055
            </p>
            <p className="lg:pb-6 py-2 text-sm lg:text-base px-4 lg:px-0  text-neutral-400  ">
              Bangladesh is known as an Blessed by Allah with exceptional human
              resources, Bangladeshis have historically traveled worldwide for
              work. Many excel in diverse professions effectively.
            </p>

            <div className="flex gap-2 justify-center lg:justify-end pt-8 pb-6">
              <ButtonPrimary sideLink="/contact" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
