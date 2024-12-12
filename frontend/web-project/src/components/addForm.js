"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { mutate } from 'swr'

const formSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(1000),
    image: z.string().min(1).max(50),
    episodes: z.string().min(1).max(50),
});

function AddForm() {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            image:"",
            title: "",
            description: "",
            episodes:""
        },


    })

    // 2. Define a submit handler.
    async function onSubmit(values) {




        let response = await fetch("http://localhost:3001/anime", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),

        });

        let res = await response.json();

        console.log(res?.message);


        mutate("http://localhost:3001/admin");
    }



    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anime image</FormLabel>
                            <FormControl>
                                <Input placeholder="url of image" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anime title</FormLabel>
                            <FormControl>
                                <Input placeholder="title.." {...field} />
                            </FormControl>
                            <FormDescription>

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Anime description</FormLabel>
                            <FormControl>
                                <Input placeholder="sypnosis of anime" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <FormField
                    control={form.control}
                    name="episodes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Total episodes</FormLabel>
                            <FormControl>
                                <Input placeholder="anime episodes?" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full'>Submit</Button>
            </form>
        </Form>

    );

}

export default AddForm;