import { useEffect } from "react";
import { useVerifyEmailMutation } from "@/src/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ExtendFetchError } from "@/src/components/auth/Signup";
import { VerifyWrapper } from "./verifyStyle";

const VerifyEmail = () => {
  const [verify, results] = useVerifyEmailMutation();
  const router = useRouter();

  useEffect(() => {
    const { token, email } = router.query;

    if (token && email) {
      const verifyEmail = async () => {
        try {
          await verify({ token, email });
          if (results.isError) {
            throw new Error("");
          }
          const res = await results.data;
          toast.success(res[0].message);
        } catch (error) {
          if (results.error) {
            const { data }: ExtendFetchError = results.error;
            toast.error(data.errors[0].message);
          }
        }
      };

      verifyEmail();
    }
  }, [router.query]);

  return (
    <VerifyWrapper>
      <h2>이메일 인증 성공!</h2>
      <Link href="/sign">로그인으로 이동</Link>
    </VerifyWrapper>
  );
};

export default VerifyEmail;
