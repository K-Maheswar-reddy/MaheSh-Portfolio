import useEducationData from "../hooks/useEducationData";

const EducationDisplay = () => {
    const {education, loading, error} = useEducationData();

    if(loading){
        return <div>Loading..</div>
    }
    if(error){
        return <div>Error Loading Education....</div>
    }

    return (
        <div>
            {education.map(educate => (
                <div>
                   <div>
                        <h2>{educate.degree}</h2>
                        <h4>{educate.college}</h4>
                        <p>{educate.place}</p>
                        <span>{educate.cgpa}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationDisplay;