/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import client from "@/app/libs/prismadb";

const RegisterModal = () => {
  //should be memoised inside the hooks not here like
  // const registerModal = useMemo(()=>useRegisterModal(),[]);
  //or
  // const registerModal = useMemo(useRegisterModal,[]);

  //the above defeats the pupose of calling hooks at top level
  //i.e. call in top scope not inside loops or block statements
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      setIsLoading(true);

      const t = toast.loading("Registering user...");

      try {
        const res = await axios.post("/api/register", data);
        const { email, password } = data;

        const callback = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (callback?.ok) {
          toast.success("Registered user", { id: t });
          registerModal.onClose();
        } else {
          toast.error(callback?.error || "Registration failed", { id: t });
        }
      } catch (err) {
        toast.error("Something went wrong", { id: t });
      } finally {
        setIsLoading(false);
        window.location.reload();
      }
    },
    [registerModal]
  );

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an Account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        Icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4 font-light ">
        <div className="justify-center flex items-center gap-2 ">
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        body={bodyContent}
        footer={footerContent}
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default RegisterModal;
