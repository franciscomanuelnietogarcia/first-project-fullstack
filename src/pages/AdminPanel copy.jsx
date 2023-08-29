import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { useTranslate, useAuthState } from 'react-admin';


const UserList = (props) => {
  const translate = useTranslate();
  const { auth } = useAuthState();

  // if (!auth || (auth.user && auth.user.role !== 'Admin')) {
  //   return <div>У вас нет доступа к этой странице.</div>;
  // }

  return (
    <List {...props} title={translate('User List')}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" label="name" />
        <EmailField source="email" label="Email" />
      </Datagrid>
    </List>
  );
};

export default UserList;
