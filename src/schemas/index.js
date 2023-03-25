import * as Yup from 'yup';
export const Schema = Yup.object({
    name:Yup.string().min(2).max(25).required('Please Enter Your Valid Name'),
    contactDetails:Yup.string().required('Please Enter Your Valid Details'),
    message:Yup.string().min(1).required('Please Enter Your Message')
});