import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createChat } from './dto/create-chat.dto';
import { addMessage } from './dto/add-message.dto';

@Injectable()
export class ChatService {
    constructor(private readonly databaseService: DatabaseService) { }

    async getChats() {
        const res = await this.databaseService.chats.findMany()
        return res
    }

    async getUsersOnChat() {
        const res = await this.databaseService.usersOnChat.findMany()
        return res
    }

    async createChat(dto: createChat) {
        try {
            const res = await this.databaseService.chats.create({
                data: {
                    connectedUsers: {
                        create: [
                            {
                                user: {
                                    connect: {
                                        id: dto.id1
                                    }
                                }
                            },
                            {
                                user: {
                                    connect: {
                                        id: dto.id2
                                    }
                                }
                            }
                        ]
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteChat(id: number) {
        try {
            const res = await this.databaseService.chats.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getMessages() {
        const res = await this.databaseService.messages.findMany()
        return res
    }

    async addMessage(dto: addMessage) {
        try {
            const res = await this.databaseService.messages.create({
                data: {
                    message: dto.message,
                    chat: {
                        connect: {
                            id: dto.chatId
                        }
                    },
                    fromUser: {
                        connect: {
                            id: dto.fromUserId
                        }
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteMessage(id: number) {
        try {
            const res = await this.databaseService.messages.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }
}
