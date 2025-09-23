const Title = ({ first, last, description }) => {
  const paragraphStyle = {
    letterSpacing: "10px", // Adjust the value as needed
  };
  return (
    <div className="pt-12 md:px-16 items-center text-center py-5">
      <p
        style={paragraphStyle}
        className="md:text-8xl lg:text-9xl text-5xl text-[#222222] font-bold hidden md:block">
        {first} {last}
      </p>
      {/* <div className='relative border-s-8 border-[#C9F31D] ps-3'> */}
      <h2 className="text-4xl -mt-12 md:-mt-20 lg:-mt-24 md:text-6xl font-bold md:font-extrabold text-[#FFFFFF] z-20">
        {first} <span className="text-[#C9F31D]">{last}</span>
      </h2>
      {/* <p className='absolute bottom-0 -z-10  md:text-[90px] lg:text-9xl mx-auto opacity-5'>{children}</p> */}
      {description && (
        <p className="pt-5 md:pt-16 text-[#B1B1A2] text-xl font-medium">
          {description}
        </p>
      )}
    </div>
    // </div>
  );
};

export default Title;
