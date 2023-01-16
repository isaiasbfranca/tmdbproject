import { apiBase, apiKey } from '../../lib/tmdb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  list: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const query = req.query.q;

    const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`);
    const json = await result.json();
    res.status(200).json({
        list: json.results
    })
}
