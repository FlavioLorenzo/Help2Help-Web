import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default yupResolver(
    yup
        .object({
            email: yup.string().email().required(),
        })
        .required()
);
