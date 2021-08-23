import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default yupResolver(
    yup.object().shape({
        email: yup
            .string()
            .email()
            .required(),
        password: yup
            .string()
            .min(8)
            .max(32)
            .required(),
    })
);
