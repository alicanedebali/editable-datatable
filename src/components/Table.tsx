import { useState } from "react";
import { UserInterface } from "../types";
import { TableRow } from "./TableRow";

export const Table = ({ data }: { data: UserInterface[] }) => {
    const [focusId, setFocusId] = useState<string>('');

    return (
        <div className="table">
            <table >
                <thead>
                    <tr>
                        <td>Avatar</td>
                        <td>Name Surname</td>
                        <td>City</td>
                        <td>Birth Date</td>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item: UserInterface) => <TableRow key={item.id} props={{ focusId, setFocusId, user: item }} />
                    )}
                </tbody>
            </table>
        </div>
    )
}