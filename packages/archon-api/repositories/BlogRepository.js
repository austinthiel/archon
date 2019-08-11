import db from './db';

export async function createBlog(req, res) {
  const { username } = req.body;

  const user = await db.raw(`INSERT INTO users (username) VALUES (:username)`, {
    username,
  });

  res.send(user);
}

export async function getBlog(req, res) {
  const users = (await db.raw(`SELECT * FROM users;`)).rows;

  res.send(users);
}

export async function updateBlog(req, res) {
  const { username, id } = req.body;

  const user = await db.raw(
    `UPDATE users SET username = :username WHERE id = :id`,
    {
      username,
      id,
    }
  );

  res.send(user);
}

export async function deleteBlog(req, res) {
  const { id } = req.body;

  const user = await db.raw(`DELETE FROM users WHERE id = :id`, {
    id,
  });

  res.send(user);
}
