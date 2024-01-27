// pages/api/[place].js
import axios from 'axios';

export default async function handler(req, res) {
    const { place } = req.query;
    const key = "AIzaSyDOYQXThcXdeYVE0WpBXAxg-14mddzS0tc";

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&type=restaurant&key=${key}`
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}