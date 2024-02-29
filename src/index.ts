import { Request, Response, route } from './httpSupport'
import { renderHtml } from './uiSupport'

async function GET(req: Request): Promise<Response> {
    return new Response(renderHtml());
}

async function POST(req: any): Promise<Response> {
    return new Response(renderHtml());
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
