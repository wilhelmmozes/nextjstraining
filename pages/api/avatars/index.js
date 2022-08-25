// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {chars} from '../../../components/data.js';
import {chars} from '@/components/data.js';
export default function handler(req, res) {
    res.status(200).json(chars);
}