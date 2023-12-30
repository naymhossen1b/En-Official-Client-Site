import UseUsers from "../../Hooks/UseUsers";


const Users = () => {

    const [ users ] = UseUsers();

    return (
        <div>
            <p>all user {users?.length}</p>
        </div>
    );
};

export default Users;