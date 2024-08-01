import Flag from "react-world-flags";

const Country = ({ countryTitle, countryImage }) => {
  return (
    <div data-aos="zoom-in">
      <div className="bg-base-100 rounded-xl shadow-2xl">
        <div className="flex flex-col lg:flex-row p-3 border-indigo-400 border-b-[1px] mx-3 items-center  ">
          <div className="lg:w-24 w-16   ">
            <Flag code={countryImage} height="16" />
          </div>
          <div className=" mx-3 lg:text-xl font-bold">{countryTitle}</div>
        </div>

        <div className="p-4 flex gap-2 items-center ">
          <div className="badge bg-green-600 badge-xs "></div>
          <div className="stat-title font-medium">Job Active </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
