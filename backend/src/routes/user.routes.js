router.post('/register', async (req, res) => {
  try {
    const { username, email, password } =