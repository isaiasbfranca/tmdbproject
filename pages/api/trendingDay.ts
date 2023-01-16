import { apiBase, apiKey } from '../../lib/tmdb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  list: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const result = await fetch(`${apiBase}/trending/all/day?api_key=${apiKey}&language=pt-BR`);
    const json = await result.json();
    res.status(200).json({
        list: json.results
    })
}
