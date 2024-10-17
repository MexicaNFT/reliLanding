import { NextApiRequest, NextApiResponse } from "next";

const HARD_CODED_SECRET = "HEIHFISHBDJBY#E836edh7wredhwwdw098776tdgbsdnnvsv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the method (GET for now)
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check for a hardcoded secret in the query or headers
  const { secret } = req.query;

  if (secret !== HARD_CODED_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Temporarily return the environment variables for testing
  // WARNING: This should be removed or commented out after testing
  return res.status(200).json({
    message: 'Environment variables',
    env: process.env, // NEVER expose this in production
  });
}