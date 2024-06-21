
export interface LoginData {
	email: string;
	password: string;
	password2:string;
	navigation?:any
}
export interface ForgotPassData {
	email: string;
}
export interface UpdateProfileData {
	firstName?: string;
	lastName?: string;
	contactNumber?: string;
	email?: string;

	password?: string;
	password2?:string;
}

export interface AddhospData {
	hospital: string;
	address: string;
	city: string;
	state: string;
	Zip: string;
}
export interface AddStaffData {
	firstName: string;
	lastName: string;
	contactNumber: number;
	Addrole: string;
	NPI: number;
}

export interface SignUpData {
	email: string;
	password: string;
	UserContactNo: string;
	confirmPassword: string;
	first_name: string;
	last_name: string;
}
export interface Contactdata {
	email: string;
	name: string;
	UserContactNo: string;
	Subject: string;
	Description:string;
}

export interface SvgProps {
	width: number;
	height: number;
	iconColor?: string;
}

export interface Visit {
	locationId: string | null;
	location: string | null;
	items: PatientDetailedData[];
	textinput?:string;
	data?:any;
	provider?: string;
	Name?: any;
	


}
export interface PatientDetail {
	Title: string;
	details: any[];
}
export interface PatientDetail1 {
	Title: string;
	details: any[];
}
export interface CarryForward {
	Patientinfo: Patient[];
	ChargesDetail: any[];
}
export interface carryforwarddata {
	DOB: Date;
}
export interface Charges {
	cptCode: string;
	cptDescription: string;
	dxCodes: any[];
	status: string;
	hospitalName: string;
	scheduledDate: string;
	patientName: string;
}
export interface CPTs {
	title: string;
	description: string;
}
export interface Scheduler {
	PatientName: string;
	Location: string;
	Reason: string;
	Status: string;
	Time: any;
}
export interface Patient {
	Name: string;
	DOB: string;
	Gender: string;
	BedNum: number;
	MRN: number;
	Status: string;
	LastVisit?: string;
	RoomNum?: number;
}

export interface RootState {
    gernalReducer: any;
    gernalSlice: any;
  authReducer: any;
	AuthState: AuthState;
	PatientState: PatientState;
}
export interface User {
	email: string;
	access_token: string;
	full_name: string;
	refresh_token: string;
	password:string,
	password2:string,
	

}

export interface AuthState {
	isLoading: boolean;
	errorMessage: string;
	user?: User;
	isLogin: boolean;
	homeSortingList: any[];
	keys: any;
	userLocations?: UserLocation[];
	defaultLocation?: UserLocation;
	favouriteList?: FavouriteList[];
	userPractice?:userPractice;


 landingPage:'Census'|'Home',
 NewCharge:'Sequential'|'One-Page',


}

export interface userPractice {
	id: number;
	OID: string | null;
	OSW_id: string | null;
	Name: string | null;
	draft_count:string | null;
	NPI: string | null;
	Specialty: string | null;
	Contact: string | null;
	Address: string | null;
	City: string | null;
	State: string | null;
	Zip: string | null;
	email: string | null;
	Comments: string | null;
 
}


export interface FavouriteList {
	Setting_id: string;
	Setting: any[];
	CodeType: string;
	Code: any[];
	CodeDescription: any[];
	Deleted: boolean;
	CreatedBy: number;
	ModifiedBy: number;
}
export interface UserLocation {
	id: string;
	practice_id: number;
	Name: string;
	Type?: string;
	NPI?: string;
	Contact?: string;
	Address?: string;
	City?: string;
	State?: string;
	Zip?: string;
	Comments?: string;
	Inactive?: boolean;
	Deleted?: boolean;
	CreatedBy?: number;
	ModifiedBy?: number;
}
// patient
export interface AddPatientData {
	firstName: string;
	lastName: string;
	DOB: Date;
	Location: string;
	Admission_date: Date;
}
export interface PatientDetailedData {
	sort: any;
	practice_id?: string | null;
	patient_id: string;
	LstVistId?: string | null;
	LstVisitDate?: string | null;
	LstVisitStatus: string | null;
	Name?: string | null;
	DOB?: string | null;
	MRN?: string | null;
	payer?: string | null;
	provider?: string | null;
	location?: string | null;
	Admission_date?: string | null;
	Room_No?: string | null;
	Inactive?: null;
	locationid?: string | null;
	AppointmentDate?: string | null;
	isAppointment?: boolean;
	appointmentid?:any,
	providerid?:any,
	appointmentStauts?: string|null
	
}

export interface PatientState {
	isLoading: boolean;
	errorMessage: string;
	patients?: PatientDetailedData[];
	PatientName:boolean,
	allProviders?: ProviderData[];
	appointment?: PatientDetailedData[];
	sortby:string,
	providerName:string,
	visitStatus:string,
	Plocation:string,
	AllDetailedAppointments:any[];
	CensusFilters?:CensusFilters,
	refreshCensusList?: boolean
	 
}

export interface CensusFilters {
	searchPatients:'N'|'M'|'R',
	sortBy?:'A'|'D',
	provider?:string,
	location?:string,
	visitStatus?:{
		isBilled?:boolean;
		isDraft?:boolean;
		isApproved?:boolean;
		isOther?:boolean;
		isNoVisit?:boolean;
		
	}
	isFiltered:boolean
}
// export interface DetailAppointmentData{
// 	id:number;
// 	patient_id:number;
// 	location_id:number;

// }
export interface titleData{
	FirstName: string;
}
export interface DemographicsData {
	FirstName: string;
	LastName: string;
	DOB: Date;
	MRN: string;
	BedNum: string;
	RoomNum?: string;
	Gender: string;
	ContactNumber:string;
}
export interface ProviderData {
	id: number;
	Fname: string | null;
	Lname: string | null;
	practice_id: number;
	user_id: number;
	DOB: string | null;
	Gender: string | null;
	Title: string | null;
	NPI: string | null;
	Speciality: string | null;
	Contact: string | null;
	Address: string | null;
	City: string | null;
	State: string | null;
	Zip: string | null;
	Comments: string | null;
	Inactive?: boolean | null;
	Deleted?: boolean | null;
}

export interface AddChareData {
	practice_id: number;
	patient_id: number;
	VisitId?: string | null;
	batch_id?: number | null;
	admission_id?: number | null;
	location_id?: number | null;
	practicestaff_id?: number;
	attendingPhysician_id?: number;
	referringPhysician_id?: number;
	VisitDate?: string;
	VisitStatus?: string;
	AdditionalNotes?: string;
	Dxcode1?: string;
	Dxcode2?: string;
	Dxcode3?: string;
	Dxcode4?: string;
	Dxcode5?: string;
	Dxcode6?: string;
	Dxcode7?: string;
	Dxcode8?: string;
	Dxcode9?: string;
	Dxcode10?: string;
	Dxcode11?: string;
	Dxcode12?: string;
	Comments?: string;
	Inactive?: boolean;
	Deleted?: boolean;
}