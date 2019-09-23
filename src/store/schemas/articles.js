import { schema } from 'normalizr';

const reply = new schema.Entity('replies')
const replies = new schema.Array(reply)
reply.define({ replies });

export const commentSchema = [new schema.Entity('replies', { replies })]

