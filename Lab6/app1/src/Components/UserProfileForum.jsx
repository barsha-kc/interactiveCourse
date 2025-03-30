import { useState, useEffect } from "react";

const UserProfileForum = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("we have an effect!!");

      
    }, [name]);

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        id="email"
                        onKeyDown={(e) => {
                            console.log(e.key);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

export default UserProfileForum;
