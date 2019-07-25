import db from './db';

export default async function subscribeToMailingList(req, res) {
  const { emailAddress } = req.body;

  const user = await db.raw(
    `INSERT INTO email_addresses (email_address) VALUES (:emailAddress)`,
    {
      emailAddress,
    }
  );

  res.send(user);
}
