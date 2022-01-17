module.exports = (sequelize) => {
    const {user, user_read_chapter, chapter, lesson, comment/** , role*/} = sequelize.models;

    user_read_chapter.belongsTo(user);
    
    user_read_chapter.belongsTo(chapter);

    comment.belongsTo(chapter);
    comment.belongsTo(user);

    lesson.belongsTo(user);
    chapter.belongsTo(lesson);
}