// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, Route } from 'next'
import path from 'path'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  
) {
  res.status(200).json({ name: 'John Doe' })
}
