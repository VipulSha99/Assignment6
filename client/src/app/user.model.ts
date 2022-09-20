export interface UserModel{
    userId?: string,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    role: string,
    address: string,
    createdDate: string,
}

export enum Role {
    superAdmin = "SuperAdmin",
    Admin = "Admin",
    Subscriber = "Subscriber"
}

export enum columnName{
    firstName = 'First Name', 
    middleName = 'Middle Name', 
    lastName= 'Last Name',
    email= 'Email',
    phoneNumber = 'Phone Number',
    role= 'Role',
    address = 'Address',
    createdDate = 'User Created Date',
    edit = 'Edit'
  }