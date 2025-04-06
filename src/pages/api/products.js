// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mockData } from "./mockData";

export default function handler(req, res) {
  const { page = 1, limit = 20 } = req.query; 
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedData = mockData.slice(startIndex, endIndex);

  res.status(200).json(paginatedData);
}
