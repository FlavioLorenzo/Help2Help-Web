import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default yupResolver(
    yup.object().shape({
        email: yup
            .string()
            .email()
            .required(),
    })
);
