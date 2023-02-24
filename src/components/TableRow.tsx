import { useRef } from "react";
import { UserInterface } from "../types";

export const TableRow : React.FC<{props:{user:UserInterface} & {focusId:string; setFocusId:(id:string)=>void}}>=(
    {props}
    )=>{
    const cityRef=useRef<HTMLDivElement | null>(null);

    const updateEditableValue=()=>{
        if(props.user.id === props.focusId){
            props.user.city=cityRef.current?.textContent || props.user.city;
        }
    }

    return(
        <tr>
            <td>
                <img src={props.user.avatar} />
            </td>
            <td>
                {props.user.name + ' ' + props.user.surname}
            </td>
            <td>
              <div
                suppressContentEditableWarning={true} 
                contentEditable={true}
                ref={props.user.id === props.focusId? cityRef : null}
                onFocus={()=>props.setFocusId(props.user.id)}
                onBlur={()=>{
                        updateEditableValue();
                         }}>
                            {props.user.city}
              </div>
            </td>
            <td>
                {props.user.birthDate}
            </td>
        </tr>);
}