const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center lg:text-left ">
      <p className="font-bold lg:py-2 text-brandColor lg:text-xl">{subtitle}</p>
      <h1 className="lg:text-5xl text-2xl font-bold lg:py-4 py-2 text-brandColor2">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
