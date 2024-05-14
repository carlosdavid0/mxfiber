import { NextResponse } from "next/server";

export async function GET() {
    const cidades = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/cidades?fields[]=nome&fields[]=estado.nome&fields[]=estado.Sigla&fields[]=slug&fields[]=status&fields[]=id&sort[]=id&filter[status][_eq]=published`, {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => {
            console.log(error);
            return [];
        });

    return NextResponse.json(cidades);
}