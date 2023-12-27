

const PrimaryButton = ({children}) => {
    return (
        <div className="btn btn-sm md:btn-lg md:font-bold md:text-2xl font-semibold text-[14px] btn-ghost border-0 border-b-4 border-l-2 border-[#C9F31D] text-[#C9F31D] text-lg font-Space_Grotesk">
            {children}
        </div>
    );
};

export default PrimaryButton;