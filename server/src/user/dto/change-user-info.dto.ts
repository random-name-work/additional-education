import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, Length } from "class-validator"

export class ChangeUserInfo {
    // documents
    @IsOptional()
    @ApiProperty({required: false})
    passportMain: string

    @IsOptional()
    @ApiProperty({required: false})
    passportAdditional: string

    @IsOptional()
    @ApiProperty({required: false})
    diploma: string

    //profile image
    @IsOptional()
    @ApiProperty({required: false})
    profileImage: string

    // name
    @IsOptional()
    @ApiProperty({required: false})
    name: string

    @IsOptional()
    @ApiProperty({required: false})
    familyName: string

    @IsOptional()
    @ApiProperty({required: false})
    surname: string

    @IsOptional()
    @ApiProperty({required: false})
    dateOfBirth: string

    // contacts
    @IsOptional()
    @ApiProperty({required: false})
    contactPreferences: string

    @IsOptional()
    @ApiProperty({required: false})
    whatsappNumber: number

    @IsOptional()
    @ApiProperty({required: false})
    viberNumber: number

    @IsOptional()
    @ApiProperty({required: false})
    TelegramNumber: number

    //passport data
    @IsOptional()
    @ApiProperty({required: false})
    passportSeries: number

    @IsOptional()
    @ApiProperty({required: false})
    passportNumber: number

    @IsOptional()
    @ApiProperty({required: false})
    passportCode: number

    @IsOptional()
    @ApiProperty({required: false})
    passportIssued: string

    @IsOptional()
    @ApiProperty({required: false})
    IssueDate: string

    @IsOptional()
    @ApiProperty({required: false})
    INN: number

    @IsOptional()
    @ApiProperty({required: false})
    SNILS: number

    //job info
    @IsOptional()
    @ApiProperty({required: false})
    jobPlace: string

    @IsOptional()
    @ApiProperty({required: false})
    jobPost: string

    // education
    @IsOptional()
    @ApiProperty({required: false})
    universityFullName: string

    @IsOptional()
    @ApiProperty({required: false})
    universityShortName: string

    @IsOptional()
    @ApiProperty({required: false})
    educationLvl: string

    @IsOptional()
    @ApiProperty({required: false})
    registrationNumber: number

    @IsOptional()
    @ApiProperty({required: false})
    diplomBlankNumber: number

    @IsOptional()
    @ApiProperty({required: false})
    diplomDate: string

}