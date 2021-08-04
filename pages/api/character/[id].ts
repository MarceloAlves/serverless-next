// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  ).then((r) => r.json());

  res.status(200).json(data);
}
