import { getUsers } from "@/actions/user";

const UserList = async () => {
  const users = await getUsers();

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-xl mb-2">UserList</h3>
      <hr />
      <div className="mt-4 text-justify">
        {users?.length > 0 ? (
          <div>
            {users?.map((user, index) => 
              <p key={user._id}>
                {index + 1}. {user.name} - {user.email}
              </p>
            )}
          </div>
        ) : (
          "No User found"
        )}
      </div>
     
    </div>
  );
};

export default UserList;
