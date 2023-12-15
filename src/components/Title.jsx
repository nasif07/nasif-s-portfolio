

const Title = ({first, last, description}) => {
    const paragraphStyle = {
        letterSpacing: '10px', // Adjust the value as needed
      };
    return (
        <div className="pt-12 md:px-16 items-center text-center">
            <p  style={paragraphStyle} className="md:text-8xl lg:text-9xl text-5xl text-[#222222] font-bold">{first} {last}</p>
            {/* <div className='relative border-s-8 border-[#C9F31D] ps-3'> */}
            <h2 className='text-4xl -mt-12 md:-mt-20 lg:-mt-24 md:text-6xl font-bold md:font-extrabold text-[#FFFFFF] z-20'>{first} <span className="text-[#C9F31D]">{last}</span></h2>
            {/* <p className='absolute bottom-0 -z-10  md:text-[90px] lg:text-9xl mx-auto opacity-5'>{children}</p> */}
            <p className="pt-16 text-white text-xl font-medium">{description}</p>
        </div>
        // </div>
    );
};

export default Title;