import { useState, useContext, createContext } from "react";

//  Context is primarily used when some data needs to be accessible by many components at different nesting levels.
//  Apply it sparingly because it makes component reuse more difficult.

// Updating Context from a Nested Component
// It is often necessary to update the context from a component that is nested somewhere deeply in the component tree.
//  In this case you can pass a function down through the context to allow consumers to update the context:
const UserContext = createContext([
    {
        firstName: "Bob",
        lastName: "Bobberson",
        suffix: 1,
        email: "bobbobberson@example.com"
    }
])

const ContextComponent = () => {
    const userState = useState({
        firstName: "James",
        lastName: "Jameson",
        suffix: 1,
        email: "jamesjameson@example.com"
    })

    return (
        <UserContext.Provider value={userState}>
            <h1>First Level</h1>
            <LevelTwo />
        </UserContext.Provider>
    )
}

const LevelTwo = () => (
    <div>
        <h2>second level</h2>
        <LevelThree />
    </div>
);

const LevelThree = () => (
    <div>
        <h3>third level</h3>
        <LevelFour />
    </div>
);

const LevelFour = () => (
    <div>
        <h4>fourth level</h4>
        <LevelFive />
    </div>
);

const LevelFive = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
                onClick={() => {
                    setUser({ ...user, suffix: user.suffix + 2, firstName: "Gangadhar" });
                }}
            >
                Increment
            </button>
        </div >
    );
};







export default ContextComponent;