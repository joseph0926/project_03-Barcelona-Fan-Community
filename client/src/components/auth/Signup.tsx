import { Box, Button, Heading } from "@chakra-ui/react";
import BaseFormControl from "./FormController";
import { useInput } from "@/src/hooks/useInput";
import { useSignupMutation } from "@/src/store/store";

const Signup = (): JSX.Element => {
  const [signup, results] = useSignupMutation();

  const {
    formState,
    touched,
    isValid,
    handleInputChange,
    handleBlur,
    isLoginFormValid,
  } = useInput();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await signup(formState).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box as="form" role="form" w="30vw" onSubmit={submitHandler}>
      <Heading mb="1rem">회원 가입</Heading>
      <BaseFormControl
        id="name"
        type="text"
        name="name"
        placeholder="사용자명"
        value={formState.name}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        isValid={isValid.name}
        touched={touched.name}
      />
      <BaseFormControl
        id="in-email"
        type="email"
        name="email"
        placeholder="이메일"
        value={formState.email}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        isValid={isValid.email}
        touched={touched.email}
      />
      <BaseFormControl
        id="in-password"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formState.password}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        isValid={isValid.password}
        touched={touched.password}
      />
      <Button
        type="submit"
        bg="transparent"
        w="100%"
        my="1rem"
        disabled={!isLoginFormValid || results.isLoading}
      >
        가입하기
      </Button>
    </Box>
  );
};

export default Signup;
