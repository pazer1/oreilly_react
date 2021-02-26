import React, { Fragment, useContext } from 'react';
import { StatusContext } from './UpdateSharedContext';

function SetStatus() {
  const [status, setStatus] = useContext(StatusContext);
  return <input value={status} onChange={e => setStatus(e.target.value)} />;
}

export function Status() {
  const [status] = useContext(StatusContext);
  return <p>{status}</p>;
}

export function Page1() {
  return (
    <Fragment>
      <h1>Page 1</h1>
      <SetStatus />
      <Status/>
    </Fragment>
  );
}

export function Page2() {
  return (
    <Fragment>
      <h1>Page 2</h1>
      <Status/>
    </Fragment>
  );
}

export function Page3() {
  return (
    <Fragment>
      <h1>Page 3</h1>
      <SetStatus />
      <Status/>
    </Fragment>
  );
}