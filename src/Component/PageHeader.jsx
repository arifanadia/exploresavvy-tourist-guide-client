

const PageHeader = ({ bg, title }) => {
    return (
        <div className="bg-no-repeat h-[300px] bg-cover bg-center text-center"
            style={{
                backgroundImage: `linear-gradient(
            #0f0c29ED,#302b6336),url(${bg})`
            }}>
            <div className="bg-gray-900 bg-opacity-40 w-2/3 py-12 mx-auto">
                <h1 className="text-white uppercase text-2xl md:text-4xl py-20 font-satisfy">{title}</h1>
            </div>

        </div>
    );
};

export default PageHeader;
