const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  function canDeleteBlog(user, blog) {
    return (
      user.role === ROLE.ADMIN ||
      blog.userid ===user.id
    )
  }

  module.exports = {

    canDeleteBlog
  }
