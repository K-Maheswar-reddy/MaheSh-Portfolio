import useExperienceData from "../hooks/useExperienceData";

const ExperienceDisplay = () => {
    const { experience, loading, error } = useExperienceData();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div>Error Loading Experience...</div>
    }

    return (
        <div className="mx-1">
             {experience.map(work => (
                <div>
                    <h2>{work.company}</h2>
                    <h2>{work.role}</h2>
                    <p>{work.description}</p>    
                </div>
             ))}
        </div>
    )
}

export default ExperienceDisplay;