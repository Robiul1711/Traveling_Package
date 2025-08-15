export const CommonPageWrapper = ({ children, pdy = true }) => {
    return (
        <div className={`section-padding-x section-padding-y flex flex-col gap-[45px] xmd:gap-[80px] ${pdy ? '' : ''}`}>
            {children}
        </div>
    );
};
