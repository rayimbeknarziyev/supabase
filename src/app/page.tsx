"use client"

import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

export default function Page() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  return (
    <div>
      <UserForm isFetching={isFetching} setIsFetching={setIsFetching} />
      <UserTable isFetching={isFetching} setIsFetching={setIsFetching} />
    </div>
  );
}
