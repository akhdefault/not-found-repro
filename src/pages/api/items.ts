import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  items: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.search) {
    res.status(200).json({ items: [] });
    return;
  }
  res.status(200).json({ items: ["item-1", "item-2"] });
}
