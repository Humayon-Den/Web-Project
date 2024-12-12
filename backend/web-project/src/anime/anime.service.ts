import { Injectable } from '@nestjs/common';
import { Anime } from './anime.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimeService {

    constructor(
        @InjectRepository(Anime)
        private animeRepository: Repository<Anime>,
    ) { }

    async getAllAnime() {
        console.log("Get called");
        // return "Anime controller";
        return this.animeRepository.find();
    }


    async getAnime(id : number){
        let anime  = await this.animeRepository.findOne({ where: { id } });

        if (!anime) {

            return { message: "Anime not found!" };
        }

        return anime;
    }


    saveAnime( image:string ,  title: string, description: string  , episodes : string) {

        console.log("Post called");
        let anime = this.animeRepository.create({ image , title, description  , episodes})
        this.animeRepository.save(anime);
        return { message: "Anime saved successfully" };


    }

    async updateAnime(id: number, title: string, description: string  , episodes : string) {



        let anime = await this.animeRepository.findOne({ where: { id } });

        if (!anime) {

            return { message: "Anime not found!" };
        }

        anime.title = title;
        anime.description = description;
        anime.episodes = episodes;

        this.animeRepository.save(anime);


        return { message: "Anime updated successfully" };

    }

    async deleteAnime(id: number) {



        let anime = await this.animeRepository.findOne({ where: { id } });

        if (!anime) {
            return { message: "Anime not found operation discarded" };
        }

        this.animeRepository.delete(anime);

        return { message: "Anime deleted successfully" };

    }


}
