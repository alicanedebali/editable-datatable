import { useContext, useEffect, useState } from 'react';
import { Table, List } from '../components';
import { UserContext } from '../context/User.context';
import { ContextInterface } from '../types';

export const Main = () => {
    const { users, saveUsers, bindUser } = useContext(UserContext) as ContextInterface;
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setLoader(true)
        getTableData().then(res => {
            saveUsers(res);
            setLoader(false);
        }).catch(err => {
            console.error("Error ", err);
            setLoader(false);
        });
    }, [])

    const getTableData = async () => {
        return await fetch("https://63ef74474d5eb64db0c9ad89.mockapi.io/users")
            .then((response) => response.json());
    }

    return (
        <div className='container'>

            {loader
                ? <div className={"spinner"}></div>
                : <>
                    <Table data={users} />
                    <br />
                    <button
                        onClick={() => {
                            bindUser();
                        }}> Submit
                    </button>
                    <br />
                    <List props={users} />
                </>}
        </div>
    );
};
