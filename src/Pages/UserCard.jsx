import { useContext } from "react";
import { UserContext } from "../context/UserContex";
import { useNavigate } from "react-router";

const UserCard = () => {

 
  const {userData, deleteUser, setEditingUser} =  useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 content-start items-start gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
      {userData.map((user) => (
        <div
          key={user.id}
          className="h-fit w-full max-w-72 self-start overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* User Image */}
          <div className="h-32 w-full overflow-hidden bg-gray-100">
            <img
              src={
                user.imageUrl ||
                "https://placehold.co/400x300?text=Profile"
              }
              alt={user.name || "User profile"}
              className="h-full w-full object-cover"
            />
          </div>

          {/* User Details */}
          <div className="p-3">
            <h2 className="mb-2 truncate text-xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="mb-4 warp-break-words text-sm text-gray-500">
              {user.email}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                                setEditingUser(user);
                                navigate("/user-form");
                                }}
                className="flex-1 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => deleteUser?.(user.id)}
                className="flex-1 rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
