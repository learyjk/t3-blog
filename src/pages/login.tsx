import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

function RegisterPage() {
  const { handleSubmit, register } = useForm<createUserInput>();
  const router = useRouter();
  // const { mutate, error } = trpc.useMutation(["users.register-user"], {
  //   onSuccess: () => {
  //     router.push("/login");
  //   },
  // });

  function onSubmit(values: createUserInput) {
    // mutate(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {error && error.message} */}
        <h1>Register</h1>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <Link href="/register">Register</Link>
    </>
  );
}

export default RegisterPage;
