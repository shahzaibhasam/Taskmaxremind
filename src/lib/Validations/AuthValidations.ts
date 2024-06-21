import * as yup from 'yup';
const VALID_EMAIL = 'Please enter a valid email address';
const VALID_PASSWORD = 'Password must be at least 8 characters long';
const REQUIRED_EMAIL = 'Email is required';
const REQUIRED_PASSWORD = 'Password is required';
const REQUIRED = 'This Field is Required';
const MATCH_PASSWORD = 'Passwords must match';

const NumberRegex = /^$|^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// login schema
const loginSchema = yup.object({
	email: yup.string().email(VALID_EMAIL).required(REQUIRED_EMAIL).matches(EmailRegex,VALID_EMAIL),
	password: yup.string().required(REQUIRED_PASSWORD).min(8, VALID_PASSWORD),
});

const UpdateSchema = yup.object({
	firstName: yup.string().required(REQUIRED),
	lastName: yup.string().required(REQUIRED),
	
});


const AddPatientSchema = yup.object({
	firstName: yup.string().required(REQUIRED),
	lastName: yup.string().required(REQUIRED),
	DOB: yup.date().required(),
	Admission_date: yup.date().required(),
	Location: yup.string().required(REQUIRED),
	ContactNumber: yup.string().matches(NumberRegex, 'Invalid phone number'),
	RoomNum: yup.string(),
	BedNum: yup.string(),
	provider: yup.string(),
	refPhy: yup.string(),
	Description: yup.string(),
	CareCoordinator: yup.string(),
	CCRelation: yup.string(),
});
// const DemograpicsSchemaEdit = yup.object({
// 	firstName: yup.string().required(REQUIRED).matches(CharRegex,FNameCharacter),
// 	lastName: yup.string().required(REQUIRED).matches(CharRegex,LNameCharacter),
// 	DOB: yup.date().required('This field is required '),
// 	Admission_date: yup.date().required('This field is required '),
// 	Location: yup.string().required(REQUIRED),
// 	ContactNumber: yup.string().matches(NumberRegex, 'Invalid phone number'),
// 	RoomNum: yup.string(),
// 	BedNum: yup.string(),
// 	provider: yup.string(),
// 	refPhy: yup.string(),
// 	Description: yup.string(),
// });
const DemographicsSchema = yup.object({
	FirstName: yup.string().required(REQUIRED),
	LastName: yup.string().required(REQUIRED),
	// DOB: yup.date(),
	Gender: yup.string(),
	MRN: yup.string(),
	RoomNum: yup.string(),
	BedNum: yup.string(),
	ContactNumber: yup.string().matches(NumberRegex, 'Invalid phone number'),
	CareCoordinator: yup.string(),
	CCRelation: yup.string(),
	CCContact:yup.string().matches(NumberRegex, 'Invalid phone number'),
});
const AddhospSchema = yup.object({
	hospital: yup.string().required(REQUIRED),
	address: yup.string().required(REQUIRED),
	city: yup.string().required(REQUIRED),
	state: yup.string().required(REQUIRED),
	Zip: yup.string().required(REQUIRED),
});
const AddhospLocSchema = yup.object({
	hospital: yup.string().required(REQUIRED),
	address: yup.string(),
	city: yup.string(),
	state: yup.string(),
	Zip: yup.string(),
	ContactNumber: yup.string().matches(NumberRegex, 'Invalid phone number'),
});
const CarryforwardSchema = yup.object({
	DOB: yup.string(),
});
const AddStaffSchema = yup.object({
	FirstName: yup.string().required(REQUIRED),
	LastName: yup.string().required(REQUIRED),
	NPI: yup.string(),
	Speciality: yup.string(),
	Contact: yup.string().matches(NumberRegex, 'Invalid phone number')	,
});
const signupSchema = yup.object({
	UserContactNo: yup
		.string()
		.matches(NumberRegex, 'Invalid phone number')
		.required('contact Number is required'),
	email: yup.string().email(VALID_EMAIL).required(REQUIRED_EMAIL),
	first_name: yup.string().required('Firtst Name is required'),
	last_name: yup.string().required('Last Name is required'),

	password: yup.string().required(REQUIRED_PASSWORD).min(8, VALID_PASSWORD),
	confirmPassword: yup
		.string()
		.required(REQUIRED_PASSWORD)
		.min(8, VALID_PASSWORD)
		.oneOf([yup.ref('password')], MATCH_PASSWORD),
});
const ContactSchema = yup.object({
	UserContactNo: yup
		.string()
		.matches(NumberRegex, 'Invalid phone number')
		.required('contact Number is required'),
	email: yup.string().email(VALID_EMAIL).required(REQUIRED_EMAIL).matches(EmailRegex,VALID_EMAIL),
	name: yup.string().required('Name is required'),

	Subject: yup.string(),
	Description: yup.string(),
});
const forgetPassword = yup.object({
	email: yup.string().email(VALID_EMAIL).required(REQUIRED_EMAIL).matches(EmailRegex,VALID_EMAIL),
});

const careCordinatorSchema = yup.object({
	CCContact: yup.string().matches(NumberRegex, 'Invalid phone number'),
	CCRelation: yup.string(),
	CareCoordinator: yup.string(),
});
const titleSchema= yup.object({
	FirstName: yup.string().required(REQUIRED),
});

export {
	signupSchema,
	loginSchema,
	forgetPassword,
	UpdateSchema,
	AddPatientSchema,
	AddStaffSchema,
	ContactSchema,
	CarryforwardSchema,
	DemographicsSchema,
	AddhospSchema,
	careCordinatorSchema,
	titleSchema,
 AddhospLocSchema

};
