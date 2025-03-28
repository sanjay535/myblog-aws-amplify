import { type ClientSchema, a, defineData } from '@aws-amplify/backend';


const schema = a.schema({
  Post: a.model({
    postId: a.id(),
    name: a.string().required(),
    categoryId: a.id(),
    category: a.belongsTo('Category', 'categoryId'),
    title: a.string(),
    content: a.string(),
    authorId: a.id().required(),
    author: a.belongsTo('AdminUser', 'authorId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    status: a.enum(['PUBLISHED', 'DELETED', 'DRAFTED']),
    tags: a.hasMany('PostTags', 'postId'),
    keywords: a.string().array()
  }).authorization(allow => [
    // Allow anyone auth'd with an API key to read everyone's posts.
    allow.authenticated(),
    // Allow signed-in user to create, read, update,
    // and delete their __OWN__ posts.
    allow.owner(),
  ]),

  PostTags: a.model({
    id: a.id(),
    postId: a.id().required(),
    tagId: a.id().required(),
    post: a.belongsTo('Post', 'postId'),
    tag: a.belongsTo('Tag', 'tagId'),
  }).authorization((allow) => allow.authenticated()),

  Tag: a.model({
    tagId: a.id(),
    name: a.string().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    posts: a.hasMany('PostTags', 'tagId'),
  }).authorization((allow) => allow.authenticated()),

  Category: a.model({
    name: a.string().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    posts: a.hasMany('Post', 'categoryId'),
  }).authorization((allow) => allow.authenticated()),

  AdminUser: a.model({
    id: a.id(),
    userName: a.string().required(),
    password: a.string(),
    email: a.string().required(),
    image: a.string(),
    name: a.string(),
    profession: a.string(),
    description: a.string(),
    joining_date: a.date(),
    total_posts: a.integer(),
    posts: a.hasMany('Post', 'authorId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).authorization((allow) => allow.authenticated()),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

