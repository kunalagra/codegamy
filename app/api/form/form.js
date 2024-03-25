// pages/api/form.js

import axios from 'axios';

export default async function handler(req, res) {
  console.log('Received request:', req.method, req.url);

  if (req.method === 'POST') {
    try {
      const { name, age, gender, college, city, country, phone } = req.body;
      const response = await axios.post('http://example.com/api/form', {
        name,
        age,
        gender,
        college,
        city,
        country,
        phone,
      });

      console.log('Response from backend:', response.data);
      res.status(200).json({ message: 'Form data submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
