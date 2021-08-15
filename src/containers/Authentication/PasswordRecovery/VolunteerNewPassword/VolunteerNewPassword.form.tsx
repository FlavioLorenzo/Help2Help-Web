import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default yupResolver(
    yup.object().shape({
        password: yup
            .string()
            .min(8)
            .max(32)
            .required(),
        passwordConfirmation: yup
            .string()
            .test("passwords-match", "Passwords must match", function(value) {
                return this.parent.password === value;
            }),
    })
);
