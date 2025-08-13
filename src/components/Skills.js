import useSkillsData from "../hooks/useSkillData";

const SkillsDisplay = () => {
    const { skill, loading, error } = useSkillsData();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div>Error Loading Skills...</div>
    }

    return (
        <div className="mx-1">
             {skill.map(skills => (
                <div>
                    <h2>{skills.languages}</h2>
                    <h2>{skills.frontend}</h2>
                    <p>{skills.backend}</p>   
                    <p>{skills.apisAndLibraries}</p>
                    <p>{skills.tools}</p>
                    <p>{skills.testing}</p> 
                </div>
             ))}
        </div>
    )
}

export default SkillsDisplay;