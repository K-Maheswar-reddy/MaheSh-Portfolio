import useProfileData from "../hooks/useProfileData";

const ProfileDisplay = () => {
    const { users, loading, error } = useProfileData();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div>Error Loading Profile...</div>
    }

    return (
        <div className="mx-1">
            {/**fixed contact section */}
            <div  className="bg-[#e9e9e9]   overflow-hidden">
                {users.map(profile => (
                    <div className="flex flex-row relative overflow-hidden  justify-around pb-10 pt-5">
                        <button className="bg-sky-500/50 rounded-sm p-1 shadow-cyan-500/50 ">
                            {profile.phone}
                        </button>

                        <button className="bg-sky-500/100 rounded-sm p-1  ">
                            {profile.location}
                        </button>

                        <button className="bg-sky-500/100 rounded-sm p-1  ">
                            <a
                                href={profile.github || "#"}
                                target="_blank"
                                rel="noreferrer">
                                Github
                            </a>
                        </button>

                        <button className="bg-sky-500/100 rounded-sm p-1  ">
                            <a
                                href={profile.gmail || "#"}
                                target="_blank" rel="noreferrer">
                                Gmail
                            </a>
                        </button>

                        <button className="bg-sky-500/100 rounded-sm p-1  ">
                            <a
                                href={profile.linkedin || "#"}
                                target="_blank"
                                rel="noreferrer">
                                LinkedIn
                            </a>
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-[#7B4949]">
                {/**profile infomation section */}
                {users.map(profile => (
                    <div className="flex felx-row">
                        <img className="animate-pulse scale-x-50 scale-y-50" src={profile.profilePhoto} alt="Profile" />
                        <h1 >{profile.name}</h1>
                        <h2>{profile.title}</h2>
                        <p className="capitalize text-pretty wrap-anywhere">{profile.aboutMe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileDisplay;