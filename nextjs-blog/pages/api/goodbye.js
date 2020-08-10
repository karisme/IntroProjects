// useful for forms etc.
// ie:
//  const email = req.body.email
// Save email to your database, etc...

export default (req, res) => {
    res.status(200).json({ text: 'Dueces' })
  }