const ServicePoint = () => {
  return (
    <div className=" z-9 container mx-auto p-4  lg:px-16 bottom-16 relative">
      <div className="flex w-full justify-center max-w-sm lg:max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5   ">
          <div
            data-aos="fade-up"
            className=" rounded-xl cursor-pointer   bg-primary hover:bg-rose-900 text-white   shadow-xl border-[1px] "
          >
            <div className="card-body">
              <h2 className=" text-lg lg:text-2xl font-bold text-center">
                E-commerce
              </h2>
              <p className="text-center lg:text-sm text-xs">
                Providing comprehensive training programs.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-xl  cursor-pointer   bg-primary hover:bg-rose-900 text-white   shadow-xl border-[1px] "
          >
            <div className="card-body">
              <h2 className=" text-lg lg:text-2xl font-bold text-center">
                Tourism
              </h2>
              <p className="text-center lg:text-sm text-xs">
                Finding the best talent to fit your needs.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-xl  cursor-pointer   bg-primary hover:bg-rose-900 text-white   shadow-xl border-[1px] "
          >
            <div className="card-body">
              <h2 className=" text-lg lg:text-2xl font-bold text-center whitespace-nowrap">
                Property Buy Sell
              </h2>
              <p className="text-center lg:text-sm text-xs">
                Expert advice to solve your business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePoint;
