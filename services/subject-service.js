import { auth } from "@/auth";

export async function getSubject() {
    const session = await auth();
    console.log("Fetching workspaces..."); 

    const res = await fetch(
        "http://192.168.42.137:8080/api/v1/subjects?offset=1&limit=10",
        {
            method: "GET",
            headers: {
                "accept": "*/*",
                Authorization: `Bearer ${session?.payload?.token}`,
                "Cache-Control": "no-cache",
            }
        }
    );

    const data = await res.json();
    console.log("data=====",data);
    return data;
}