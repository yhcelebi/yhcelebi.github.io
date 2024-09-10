import React from "react";
import {Avatar} from "@nextui-org/avatar";

export const MainArticle = ({styles}: { styles: any }) => {
    var name:string = "hey";

    return(
        <>
            <div className={`${styles}`}>
                <div className="grid grid-cols-2">
                    <div className="h-full z-10">
                        <div className="my-10">
                            <img className="rounded-lg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a8a81af-a64e-4760-bdd0-7b0d248e0ba8/dfrt1hx-aec6627d-f725-46aa-8d9f-7392fee4f5d1.png/v1/fill/w_1024,h_586,q_80,strp/vector_landscape_6_by_angelforme_dfrt1hx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTg2IiwicGF0aCI6IlwvZlwvNWE4YTgxYWYtYTY0ZS00NzYwLWJkZDAtN2IwZDI0OGUwYmE4XC9kZnJ0MWh4LWFlYzY2MjdkLWY3MjUtNDZhYS04ZDlmLTczOTJmZWU0ZjVkMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dBUVBuQjg1SlQCl3H4Z5wv7D8bHhu4KEFzK50mOPmMY" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-10 mb-4 ml-12">
                            <div className="w-14">
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                            </div>
                            <div className="my-2 mx-0">
                                <p className="font-light">Lingua</p>
                            </div>
                            <div className="my-1 mx-2">
                                <p className="font-light">.</p>
                            </div>
                            <div className="w-32 my-2 mx-0">
                                <p className="font-light">12 minutes ago</p>
                            </div>
                        </div>
                        <div className="ml-12">
                            <p className="font-bold text-5xl">The Impeccable Forest</p>
                        </div>
                        <div className="ml-12 mt-4">
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis sint magnam, laboriosam nihil corporis illo provident perspiciatis. Perspiciatis perferendis sunt dolore exercitationem, reprehenderit officiis enim!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}