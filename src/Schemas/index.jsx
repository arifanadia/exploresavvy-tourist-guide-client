import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(20).required('Please enter your name'),
    photo: Yup.string().required('Please enter your photoURL'),
    email: Yup.string().required('Please enter your email'),
    password: Yup.string().matches(
        /(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        'Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long'
    ).required('Please enter your password')

})