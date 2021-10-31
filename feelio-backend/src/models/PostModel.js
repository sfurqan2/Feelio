const { DBService } = require("../services/DBService");

class PostModel {
  findById({ post_id, cb }) {
    DBService.dbPool.query(
      "SELECT body, image, user_id, posted_at from posts where post_id = ?",
      [post_id],
      (error, results) => {
        cb(error, results);
      }
    );
  }

  findByUser({ user_id, cb }) {
    DBService.dbPool.query(
      "SELECT body, image, user_id, posted_at from posts where user_id = ? ORDER BY post_id DESC",
      [user_id],
      (error, results) => {
        cb(error, results);
      }
    );
  }

  create({ body, image, user_id, cb }) {
    DBService.dbPool.query(
      "INSERT INTO posts (body, image, user_id) VALUES (?, ?, ?)",
      [body, image, user_id],
      (error, results) => {
        cb(error, results.insertId);
      }
    );
  }

  edit({ body, image, post_id, cb }) {
    DBService.dbPool.query(
      "UPDATE posts SET body = ?, image = ? WHERE post_id = ?",
      [body, image, post_id],
      (error, results) => {
        cb(error, results.insertId);
      }
    );
  }


  delete({ post_id, cb }) {
    DBService.dbPool.query(
      "DELETE FROM posts WHERE post_id = ?",
      [post_id],
      (error, results) => {
        cb(error, results.insertId);
      }
    );
  }
}

module.exports.PostModel = new PostModel();
