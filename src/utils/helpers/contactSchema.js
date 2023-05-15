import * as yup from "yup"

export const contactSchema = yup.object().shape({
	names: yup.string().required('Please enter your names'),
	email: yup.string().email().required('Please enter email address'),
	subject: yup.string().required('Please enter subject'),
	message: yup.string().required('Please enter your message')
})