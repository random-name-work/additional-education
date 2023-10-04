import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserInfo {
    // documents
    @IsOptional()
    passportMain: String
    @IsOptional()
    passportAdditional: String
    @IsOptional()
    diploma: String

    //profile image
    @IsOptional()
    profileImage: String

    // name
    @IsOptional()
    name: String
    @IsOptional()
    familyName: String
    @IsOptional()
    surname: String
    @IsOptional()
    dateOfBirth: String

    // contacts
    @IsOptional()
    contactPreferences: String
    @IsOptional()
    whatsappNumber: Number
    @IsOptional()
    viberNumber: Number
    @IsOptional()
    TelegramNumber: Number

    //passport data
    @IsOptional()
    passportSeries: Number
    @IsOptional()
    passportNumber: Number
    @IsOptional()
    passportCode: Number
    @IsOptional()
    passportIssued: String
    @IsOptional()
    IssueDate: String
    @IsOptional()
    INN: Number
    @IsOptional()
    SNILS: Number

    //job info
    @IsOptional()
    jobPlace: String
    @IsOptional()
    jobPost: String

    // education
    @IsOptional()
    universityFullName: String
    @IsOptional()
    universityShortName: String
    @IsOptional()
    educationLvl: String
    @IsOptional()
    registrationNumber: Number
    @IsOptional()
    diplomBlankNumber: Number
    @IsOptional()
    diplomDate: String

}