import { apiBase, apiKey } from '../../../lib/tmdb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  info: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const id = req.query.id;

    const result = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`);
    const json = await result.json();
    res.status(200).json({
        info: json
    })
}
