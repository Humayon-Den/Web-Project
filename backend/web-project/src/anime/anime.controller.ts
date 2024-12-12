import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Anime } from './anime.entity';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {

    constructor(private readonly animeService: AnimeService) { }

    @Get()
    async getAllAnime() {   
        console.log("Get called");
        const anime = await this.animeService.getAllAnime();
        return anime; // NestJS will automatically return this as JSON
    }

    @Get(":id")
    async getAnime(
        @Param("id") id : number
    ){
        console.log("data fetched on id " + id);
        
        return await this.animeService.getAnime(id); 
    }

    // @Post(":id")
    @Post()
    saveAllAnime(
        // @Param("id") id: number,
        @Body("image") image: string,
        @Body("title") title: string,
        @Body("description") description: string,
        @Body("episodes") episodes: string,
    ) {
        console.log("Post called");
        return this.animeService.saveAnime(image,title,description,episodes);
    }

    @Put(":id")
    updateAllAnime(
        @Param("id") id: number,
        @Body("title") title: string,
        @Body("description") description: string,
        @Body("episodes") episodes: string,
        
    ) {
        // return title + " , " + description;
        console.log("Put called");
        return this.animeService.updateAnime(id, title, description , episodes);
    }

    @Delete(":id")
    deleteAnime(@Param("id") id: number) {
        console.log("Delete called");
        return this.animeService.deleteAnime(id);
    }

}
