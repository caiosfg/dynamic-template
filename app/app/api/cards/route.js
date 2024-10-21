import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const limite = searchParams.get("limite");
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limite}`);

    if(!res.ok) throw new Error("Falha ao consumir api")

    const data = await res.json();

    return NextResponse.json({data}); 
}