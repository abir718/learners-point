const Dashtext = () => {
    const user = {
        displayName: "Alex Johnson",
        email: "alex.johnson@example.com",
        photoURL: "https://placehold.co/120x120?text=Alex",
    };

    const UserServices = [1, 2, 3];
    const UserReviews = [1, 2];
    return (
        <div className="max-w-xl mx-auto mt-20 rounded-lg">
            <h1 className="text-3xl font-bold text-[#052843]">User Profile</h1>
            <div className="bg-white shadow-lg">
                <div className="h-28 bg-[#052843] rounded-tl-lg rounded-tr-lg mt-2"></div>
                <div className="p-3 relative text-center">
                    <div className="flex items-center gap-4">
                        <img src={user.photoURL} alt="User Avatar"className="w-32 h-32 rounded-full border-4 border-white -mt-14"/>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold mt-2">{user.displayName}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashtext;
