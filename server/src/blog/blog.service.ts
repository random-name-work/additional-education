import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { addBlog } from './dto/add-blog.dto';
import { addBlogBlock } from './dto/add-blog-block.dto';
import { addComment } from './dto/add-comment.dto';

@Injectable()
export class BlogService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getBlogs() {
        const res = await this.databaseService.blogs.findMany()
        return res
    }

    async getBlogInfos() {
        const res = await this.databaseService.blogInfo.findMany()
        return res
    }

    async addBlog(authorId: number, facultyId: number, dto: addBlog) {
        try {
            const res = await this.databaseService.blogs.create({
                data: {
                    ...dto,
                    author: {
                        connect: {
                            id: authorId
                        }
                    },
                    faculty: {
                        connect: {
                            id: facultyId
                        }
                    },
                    blogInfo: {
                        create: {}
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteBlog(id: number) {
        try {
            const res = await this.databaseService.blogs.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    // blog blocks
    async getBlogBlocks() {
        const res = await this.databaseService.blogBlocks.findMany()
        return res
    }

    async addBlogBlock(blogInfoId: number, dto: addBlogBlock) {
        try {
            const res = await this.databaseService.blogBlocks.create({
                data: {
                    ...dto,
                    blogInfo: {
                        connect: {
                            id: blogInfoId
                        }
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteBlogBlock(id: number) {
        try {
            const res = await this.databaseService.blogBlocks.delete({
                where: {
                    id
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    //comments
    async getComments() {
        const res = await this.databaseService.comment.findMany()
        return res
    }

    async addComment(blogInfoId: number, userId: number, dto: addComment) {
        try {
            const res = await this.databaseService.comment.create({
                data: {
                    ...dto,
                    blogInfo: {
                        connect: {
                            id: blogInfoId
                        }
                    },
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async deleteComment(id: number) {
        try {
            const res = await this.databaseService.comment.delete({
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
