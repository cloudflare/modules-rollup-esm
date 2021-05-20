import slug from 'slug.txt'
import path from 'path';

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env)
    } catch (e) {
      return new Response(e.message)
    }
  },
}

async function handleRequest(request, env) {

  console.log(path.basename(request.url))
  return new Response(slug)
}
