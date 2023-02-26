import { UserInterface } from "./User.interface";

export interface ContextInterface {
    users: UserInterface[];
    saveUsers: (users: UserInterface[]) => void;
    updateUser: (id: string, city: string) => void;
    bindUser: () => void;
}