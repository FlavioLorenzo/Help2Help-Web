import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default yupResolver(
    yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup
            .string()
            .email()
            .required(),
        password: yup
            .string()
            .min(8)
            .max(16)
            .required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    })
);
