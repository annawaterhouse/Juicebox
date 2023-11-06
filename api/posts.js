const router = require('express').Router();
module.exports = router;

const prisma = require('../prisma')


//This returns all the posts in the database
router.get('/',  async(req, res, next) => {
    try{
        const posts = await prisma.post.findMany();
        res.json(posts)
    } catch{
        next();
    }
});


//This will return a single post grabbing its specified id
router.get('/:id', async (req, res, next) => {
    try{
        const id = +req.params.id;

        const post = await prisma.post.findUnique({ where: { id } });
        if(!post) {
            return next({
                status: 404,
                message: `Could not find the post with an id of ${id}.`,
            });
        }
        res.json(post);
    } catch {
        next();
    }
});