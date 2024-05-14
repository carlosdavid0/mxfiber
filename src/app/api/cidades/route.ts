import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin')

    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}

export async function GET(request: NextRequest) {
    const origin = request.headers.get('origin')

    const cidades = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/cidades?fields[]=nome&fields[]=estado.nome&fields[]=estado.Sigla&fields[]=slug&fields[]=status&fields[]=id&sort[]=id&filter[status][_eq]=published`, {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => {
            console.log(error);
            return [];
        });

    return NextResponse.json(cidades, {
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}