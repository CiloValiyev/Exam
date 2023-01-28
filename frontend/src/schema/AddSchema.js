import * as yup from "yup";

export const AddSchema = yup.object().shape({
    name:yup.string("").required("Name is String"),
    image:yup.string("").required(""),
    description:yup.string("").required("")
})