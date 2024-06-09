import SectionTitle from '../../../Component/SectionTitle'

const AddPackage = () => {
    return (
        <div>
            <SectionTitle title={'Add packages'} subTitle={'Add new packages to the system.'} />
            <form>
                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text-alt">Bottom Left label</span>
                        <span className="label-text-alt">Bottom Right label</span>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default AddPackage;