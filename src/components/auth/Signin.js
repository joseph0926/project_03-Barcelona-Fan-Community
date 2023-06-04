import { Box, Button, Heading } from "@chakra-ui/react";
import BaseFormControl from "./FormController.js";
import { useInput } from "@/src/hooks/useInput.js";

const Signin = () => {
  const { formState, touched, isValid, handleInputChange, handleBlur, isLoginFormValid } = useInput();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isLoginFormValid) {
      return;
    }
  };

  return (
    <Box as="form" role="form" w="30vw">
      <Heading mb="1rem">Sign in</Heading>
      <BaseFormControl
        id="in-email"
        type="email"
        name="email"
        placeholder="Email"
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
        placeholder="Password"
        value={formState.password}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        isValid={isValid.password}
        touched={touched.password}
      />
      <Button bg="transparent" w="100%" my="1rem" disabled={!isLoginFormValid}>
        Login
      </Button>
    </Box>
  );
};

export default Signin;
