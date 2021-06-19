const Blog = require("../../../models/blog");
const User = require("../../../models/user");

module.exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      userId: req.user._id,
      title: req.body.title,
      content: req.body.content,
    });
    const user = await User.findOne(req.user._id);

    user.blogs.push(blog._id);
    await user.save();

    return res.status(200).json({
      data: {
        blog,
        user,
      },
      msg: "Blog  created!",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
module.exports.getBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id)
    .populate("userId","name")
    .select("title content name");
    return res.status(200).json({
        msg: "Fetched blog content title and author",
        blog: blog,
      });
    } catch (err) {
      console.log("error in getting Blog", err);
  
      return res.status(500).send(err);
    }
};
module.exports.getByTitle = async (req, res) => {
    try {
      let blog = await Blog.find({title:req.params.title})
      .populate("userId","name")
      .select("title content name");
      return res.status(200).json({
          msg: "Fetched blog content title and author",
          blog: blog,
        });
      } catch (err) {
        console.log("error in getting Blog", err);
    
        return res.status(500).send(err);
      }
  };
  
module.exports.getAllBlogs = async (req, res) => {
  try {
    //const todos = await Todo.find(User.findOne(req.user._id).todos);
    // const user = await User.findOne(req.user._id)
    //     .populate("todos");
    const blogs = await Blog.find({})
      .populate("userId", "name")
      .select("title name");
    return res.status(200).json({
      msg: "Fetched All Blogs title and author+",
      blogs: blogs,
    });
  } catch (err) {
    console.log("error in getting Blogs", err);

    return res.status(500).send(err);
  }
};

module.exports.destroy = async (req, res) => {
  try {
    let blog = req.blog;
    let userid = blog.userId;

    if (req.user.id == blog.userId) {
      let user = await User.findByIdAndUpdate(
        userid,
        {
          $pull: {
            blogs: req.params.id,
          },
        },
        {
          useFindAndModify: true,
        },
        (err, doc) => {}
      );
      blog.remove();
      await user.save();
    }
    return res.status(200).json({
      msg: "blog deleted",
      blog,
    });
  } catch (err) {
    console.log("errr in deleting blog");
    return res.status(500).send(err);
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body || {};
    let blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        useFindAndModify: true,
      },
      (err, doc) => {}
    );
    await blog.save();
    return res.status(200).json({
      msg: "blog updated",
      blog,
    });
  } catch (err) {
    console.log("error in updating blog");
    return res.status(500).send(err);
  }
};
