"use client"
import React from 'react'
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
    episodes: z.string().min(1).max(50),
});

function EditForm({ id }) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            episodes:""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values) {
        try {

            // const AnimeId = values.id;

            const response = await fetch(`http://localhost:3001/anime/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values), // Send the form values directly
            });

            const res = await response.json();
            console.log(res?.message);

            // Optionally, mutate or refetch to update the list after the update
            mutate("http://localhost:3001/admin");

            console.log("ID for update:", id);
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anime title</FormLabel>
                            <FormControl>
                                <Input placeholder="title of the anime" {...field} />
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
                            <FormLabel>Anime description</FormLabel>
                            <FormControl>
                                <Input placeholder="edited anime sypnosis.." {...field} />
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
                                <Input placeholder="updated anime episodes?" {...field} />
                            </FormControl>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full'>Update</Button>
            </form>
        </Form>
    );
}

export default EditForm