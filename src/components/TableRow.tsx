import { useContext, useRef } from "react";
import { UserContext } from "../context/User.context";
import { ContextInterface, UserInterface } from "../types";

interface TableRowInterface {
    user: UserInterface;
    focusId: string;
    setFocusId: (id: string) => void;
}

export const TableRow: React.FC<{ props: TableRowInterface }> = (
    { props }
) => {
    const cityRef = useRef<HTMLDivElement | null>(null);
    const { updateUser } = useContext(UserContext) as ContextInterface;

    const updateEditableValue = () => {
        if (props.user.id === props.focusId) {
            updateUser(props.focusId, cityRef.current?.textContent || props.user.city)
        }
    }

    return (
        <tr>
            <td>
                <img
                    src={props.user.avatar}
                    alt={props.user.avatar} />
            </td>
            <td>
                {props.user.name + ' ' + props.user.surname}
            </td>
            <td>
                <div
                    suppressContentEditableWarning={true}
                    contentEditable={true}
                    ref={props.user.id === props.focusId ? cityRef : null}
                    onFocus={() => {
                        props.setFocusId(props.user.id);
                    }}
                    onBlur={() => {
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