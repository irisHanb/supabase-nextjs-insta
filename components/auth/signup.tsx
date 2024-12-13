import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

export default function SignUp({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="pt-10 pb-6 px-10 w-full flex gap-4 flex-col items-center justify-center max-w-lg border border-gray-400 bg-white ">
        <img src="/images/instalogo.png" alt="logo" className="w-60 mb-6" />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          className="w-full rounded-sm"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          className="w-full rounded-sm"
        />
        <Button
          onClick={() => console.log("sign up")}
          color="light-blue"
          className="w-full text-md py-2"
        >
          가입하기
        </Button>
      </div>
      <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        이미 계정이 있으신가요?{" "}
        <button
          className="text-light-blue-600 font-bold"
          onClick={() => setView("SIGNIN")}
        >
          로그인 하기
        </button>
      </div>
    </div>
  );
}