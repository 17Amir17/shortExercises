const mongo = require('./mongo/mongoClient');
const userQueries = require('./mongo/queries/userQueries');
const postQueries = require('./mongo/queries/postQueries');
const commentQueries = require('./mongo/queries/commentQueries');

const start = async () => {
  try {
    // find all users
    const users = await userQueries.getAllUsers();
    console.log(users);
    // find all posts
    const posts = await postQueries.getAllPosts();
    console.log(posts);
    // find all posts that was authored by "GoodGuyGreg"
    const gregsPosts = await postQueries.getAllPostsByAuthor('GoodGuyGreg');
    console.log(gregsPosts);
    // find all posts that was authored by "ScumbagSteve"
    const stevesPosts = await postQueries.getAllPostsByAuthor('ScumbagSteve');
    console.log(stevesPosts);
    // find all comments
    const comments = await commentQueries.getAllComments();
    console.log(comments);
    // find all comments that was authored by "GoodGuyGreg"
    const gergsComments = await commentQueries.getCommentsByAuthor(
      'GoodGuyGreg'
    );
    console.log(gregsComments);
    // find all comments that was authored by "ScumbagSteve"
    const stevesComments = await commentQueries.getCommentsByAuthor(
      'ScumbagSteve'
    );
    console.log(stevesComments);
    // find all comments belonging to the post "Reports a bug in your code"
    const post = await postQueries.getPostIdByTitle(
      'Reports a bug in your code'
    );
    console.log(post);
    const postComments = await commentQueries.getCommentsFromPost(post);
    console.log(postComments);
    //Close mongo
    console.log('Closing mongo');
    mongo.close();
  } catch (error) {
    mongo.close();
  }
};

// mongo.init().then(start);
mongo.init().then(async () => {
  console.log();
  const posts = await postQueries.getAllPosts();
  for (const post of posts) {
    console.log(
      `Post - ${post.title} by ${post.username}\nBody - ${post.body}\nComments:`
    );
    const comments = await commentQueries.getCommentsFromPost(post._id);
    if (comments.length === 0) console.log('No comments.\n');
    for (const comment of comments) {
      console.log(`${comment.username}: ${comment.comment}\n`);
    }
  }
  mongo.close();
});
