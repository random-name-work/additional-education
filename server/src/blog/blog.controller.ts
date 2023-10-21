import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogService } from './blog.service';
import { addBlog } from './dto/add-blog.dto';
import { addBlogBlock } from './dto/add-blog-block.dto';
import { addComment } from './dto/add-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('blog')
@ApiTags('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get('blogs')
    async getBlogs() {
        const res = this.blogService.getBlogs()
        return res
    }

    @Get('blogInfos')
    async getBlogInfos() {
        const res = this.blogService.getBlogInfos()
        return res
    }

    @Post('addBlog/:authorId/:facultyId')
    @UsePipes(new ValidationPipe())
    async addBlog(@Param('authorId') authorId: number, @Param('facultyId') facultyId: number, @Body() dto: addBlog) {
        const res = this.blogService.addBlog(+authorId, +facultyId, dto)
        return res
    }

    @Delete('deleteBlog/:id')
    async deleteBlog(@Param('id') id: number) {
        const res = this.blogService.deleteBlog(+id)
        return res
    }

    // blogBlock
    @Get('blogBlocks')
    async getBlogBlocks() {
        const res = this.blogService.getBlogBlocks()
        return res
    }

    @Post('addBlogBlock/:blogInfoId')
    @UsePipes(new ValidationPipe())
    async addBlogBlock(@Param('blogInfoId') blogInfoId: number, @Body() dto: addBlogBlock) {
        const res = this.blogService.addBlogBlock(+blogInfoId, dto)
        return res
    }

    @Delete('deleteBlogBlock/:id')
    async deleteBlogBlock(@Param('id') id: number) {
        const res = this.blogService.deleteBlogBlock(+id)
        return res
    }

    //comments
    @Get('comments')
    async getComment() {
        const res = this.blogService.getComments()
        return res
    }

    @Post('addComment/:blogInfoId/:userId')
    @UsePipes(new ValidationPipe())
    async addComment(@Param('blogInfoId') blogInfoId: number, @Param('userId') userId: number, @Body() dto: addComment) {
        const res = this.blogService.addComment(+blogInfoId, +userId, dto)
        return res
    }

    @Delete('deleteComment/:id')
    async deleteComment(@Param('id') id: number) {
        const res = this.blogService.deleteComment(+id)
        return res
    }
}
