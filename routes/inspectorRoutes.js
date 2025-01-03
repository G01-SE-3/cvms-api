// routes/inspectorRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this path is correct

// Route to fetch all inspectors
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM inspector');
    res.json(result.rows); // Send the rows as JSON
  } catch (error) {
    console.error('Error fetching inspectors:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch inspector by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM inspector WHERE inspector_id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Inspector not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching inspector:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Add a new inspector
router.post('/', async (req, res) => {
  const { name, surname, badge_number, assigned_department, contact_number } = req.body;
  try {
    await pool.query(
      'INSERT INTO inspector (name, surname, badge_number, assigned_department, contact_number) VALUES ($1, $2, $3, $4, $5)',
      [name, surname, badge_number, assigned_department, contact_number]
    );
    res.status(201).json({ message: 'Inspector added successfully' });
  } catch (error) {
    console.error('Error adding inspector:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update inspector
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, surname, badge_number, assigned_department, contact_number } = req.body;
  try {
    await pool.query(
      'UPDATE inspector SET name = $1, surname = $2, badge_number = $3, assigned_department = $4, contact_number = $5 WHERE inspector_id = $6',
      [name, surname, badge_number, assigned_department, contact_number, id]
    );
    res.json({ message: 'Inspector updated successfully' });
  } catch (error) {
    console.error('Error updating inspector:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete inspector
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM inspector WHERE inspector_id = $1', [id]);
    res.json({ message: 'Inspector deleted successfully' });
  } catch (error) {
    console.error('Error deleting inspector:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
