import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Editor from './components/Editor';
import Home from './components/Home';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Login from './components/Login';
import Lounge from './components/Lounge';
import Missing from './components/Missing';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthroized';

const ROLES_LIST = {
  ADMIN: 5150,
  EDITOR: 1984,
  USER: 2001,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthroized" element={<Unauthorized />} />

        <Route
          element={
            <RequireAuth
              allowedRoles={[
                ROLES_LIST.ADMIN,
                ROLES_LIST.EDITOR,
                ROLES_LIST.USER,
              ]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES_LIST.EDITOR]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES_LIST.ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                ROLES_LIST.ADMIN,
                ROLES_LIST.EDITOR,
                ROLES_LIST.USER,
              ]}
            />
          }
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
