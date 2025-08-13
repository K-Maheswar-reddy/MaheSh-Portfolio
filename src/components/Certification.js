import useCertificateData from "../hooks/useCertificationData";

const CertificationDisplay = () => {
    const { certificate, loading, error } = useCertificateData();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div>Error Loading Certificate...</div>
    }

    return (
        <div className="mx-1">
             {certificate.map(certificates => (
                <div>
                    <img src={certificates.certificationLink} alt="certificationLink"></img>
                    <h2>{certificates.name}</h2>
                    <h4>{certificates.from}</h4>
                    <span>{certificates.year}</span>
                </div>
             ))}
        </div>
    )
}

export default CertificationDisplay;