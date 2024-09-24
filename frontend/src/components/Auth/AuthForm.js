import { Box, Dialog, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";

const AuthForm = () => {
  return (
    <Dialog open={true}>
      <Typography variant="h4" textAlign={"center"}>
        Login
      </Typography>
      <form>
        <Box
          padding={6}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin={"auto"}
          alignContent={"center"}
        >
            <FormLabel sx ={{mt:1, mb: 1}}>Email</FormLabel>
            <TextField type = {'email'} name = 'email'/>
            <TextField type = {'password'} name = 'password'/>
            <FormLabel>Password</FormLabel>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
