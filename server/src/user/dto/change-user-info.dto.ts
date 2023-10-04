import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserInfo {
    // documents
    @IsOptional()
    passportMain: string

    @IsOptional()
    passportAdditional: string

    @IsOptional()
    diploma: string

    //profile image
    @IsOptional()
    profileImage: string

    // name
    @IsOptional()
    name: string

    @IsOptional()
    familyName: string

    @IsOptional()
    surname: string

    @IsOptional()
    dateOfBirth: string

    // contacts
    @IsOptional()
    contactPreferences: string

    @IsOptional()
    whatsappNumber: number

    @IsOptional()
    viberNumber: number

    @IsOptional()
    TelegramNumber: number

    //passport data
    @IsOptional()
    passportSeries: number

    @IsOptional()
    passportNumber: number

    @IsOptional()
    passportCode: number

    @IsOptional()
    passportIssued: string

    @IsOptional()
    IssueDate: string

    @IsOptional()
    INN: number

    @IsOptional()
    SNILS: number

    //job info
    @IsOptional()
    jobPlace: string

    @IsOptional()
    jobPost: string

    // education
    @IsOptional()
    universityFullName: string

    @IsOptional()
    universityShortName: string

    @IsOptional()
    educationLvl: string

    @IsOptional()
    registrationNumber: number

    @IsOptional()
    diplomBlankNumber: number

    @IsOptional()
    diplomDate: string

}