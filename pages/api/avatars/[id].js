import {chars} from '../../../components/data.js';
export default function handler(req, res) {
    const { id } = req.query;
    const filter = chars.filter((char) => char._id === id);
    (filter.length>0)?res.status(200).json(filter):res.status(500).send({ error: 'failed to fetch data' });
}