import { useEffect } from "react";
import { UserInterface } from "../types";

export const List=(
    {props}:{props: UserInterface[]}
    )=>{
        useEffect(()=>{
            console.log(props);
        },[props])

    return(
        <ol>
            {props?.map((user,index)=>
            <li key={index}>
                {user.name + ' ' + user.surname + ' '}
                -
                {' ' + user.city + ' '}
                -
                {' ' + user.birthDate}
            </li>)}
        </ol>
        );
}