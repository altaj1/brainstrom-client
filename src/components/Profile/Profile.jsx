import useRole from "../../hooks/useRole";


const Profile = () => {
    const role = useRole()
    return (
        <div>
            <h1 className="text-4xl">{role}</h1>
        </div>
    );
};

export default Profile;