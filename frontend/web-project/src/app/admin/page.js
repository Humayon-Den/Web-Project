"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddForm from "@/components/addForm";
import EditForm from "@/components/editForm";

function Page() {
  const [anime, setAnime] = useState([]);
  const [addDialog, setDialog] = useState(false);
  const [editDialogBox, seteditDialogBox] = useState(false);
  const [deleteDialogBox, setdeleteDialogBox] = useState(false);

  async function deleteAnime(id) {
    console.log("delete is called");

    try {
      // Assuming you're using fetch to make the API call
      const response = await fetch(`http://localhost:3001/anime/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Anime deleted successfully");
        // Optionally, you can add a callback here to update the UI after deletion
      } else {
        console.error("Failed to delete anime", response);
      }
    } catch (error) {
      console.error("Error while deleting anime:", error);
    }
  }

  useEffect(() => {
    async function getData() {
      //   setLoading(true);
      let response = await fetch("http://localhost:3001/anime"); //acting as array
      let res = await response.json();

      console.log(res);

      setAnime(res);
      //   setLoading(false);
    }

    getData();
  }, []);

  if (anime) {
    return (
      <div>
        <div className="w-screen h-max bg-[#1e2027] text-white">
          <div className="pt-2 pl-2 flex flex-col w-auto h-auto:">
            <div className="flex justify-between px-5">
              <h1>Anime Manager Page</h1>
              <Button variant="secondary" onClick={() => setDialog(true)}>
                Add Anime
              </Button>
            </div>

            {/* card */}
            {anime.map((item) => (
              <div
                className="mt-3 border border-gray-600 h-auto w-[99%] flex"
                key={item.id}
              >
                <div className="h-[100px] w-[5%] bg-black overflow-hidden">
                  <Image
                    src={"/anime-cover/" + item.image}
                    height={100}
                    width={50}
                    className="object-contain h-full w-full"
                  />
                </div>

                <div className="h-[100px] w-[80%]  flex flex-col justify-center gap-3 pl-2 border border-gray-700">
                  <h1>{item.title}</h1>
                  <p className="w-full h-[20px] overflow-auto truncate ">
                    {item.description}
                  </p>
                  <strong>{item.episodes}</strong>
                </div>

                <div className="w-[15%] h-[100px]  flex flex-col items-center justify-center gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      seteditDialogBox(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setdeleteDialogBox(true); // Close the delete dialog
                    }}
                  >
                    Delete
                  </Button>

                  <Dialog open={editDialogBox} onOpenChange={seteditDialogBox}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Anime</DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      <EditForm id={item.id} />
                    </DialogContent>
                  </Dialog>

                  <Dialog
                    open={deleteDialogBox}
                    onOpenChange={setdeleteDialogBox}
                  >
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Anime</DialogTitle>
                        <DialogDescription>
                          are u sure about this ?
                        </DialogDescription>

                        <div className="flex items-end justify-end gap-5">
                          {/* <Button variant={"destructive"} onClick={DeleteBlogHandler(id)}>Delete</Button> */}

                          <Button
                            variant={"destructive"}
                            onClick={() => {
                              deleteAnime(item.id); // Pass the blog ID to delete
                              setdeleteDialogBox(false); // Close the delete dialog
                            }}
                          >
                            Delete
                          </Button>

                          <Button
                            variant={"secondary"}
                            onClick={() => setdeleteDialogBox(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </DialogHeader>
                      {/* <EditForm /> */}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={addDialog} onOpenChange={setDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Anime</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <AddForm />
          </DialogContent>
        </Dialog>
      </div>
    );
  } else return <h1>Error fetching data...</h1>;
}

export default Page;
