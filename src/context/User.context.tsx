import * as React from "react";
import { UserInterface, ContextInterface, ContextPropsInterface } from "../types";

export const UserContext = React.createContext<ContextInterface | null>(null);

export const UserProvider: React.FC<ContextPropsInterface> = ({ children }) => {
    const [users, setUsers] = React.useState<UserInterface[]>([]);
    const [modifiedUsers, setModifiedUsers] = React.useState<UserInterface[]>([]);

    const saveUsers=(userData:UserInterface[])=>{
        setUsers([...userData]);
        setModifiedUsers([...userData]);
    }

    const updateUser = (id: string, city: string) => {
        modifiedUsers.filter((user: UserInterface) => {
            if (user.id === id) {
                user.city = city;
                setUsers([...users]);
            }
        });
    };

    const bindUser = () => {
        setUsers([...modifiedUsers]);
    };

    return (
        <UserContext.Provider value={{ users, saveUsers, updateUser, bindUser }}>
            {children}
        </UserContext.Provider>
    );
}