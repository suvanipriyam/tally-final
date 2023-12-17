const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs/promises')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3001
const formDataFilePath = 'form_data.json'
const formBuyDataPath = 'buy_data.json'

app.use(cors())
app.use(bodyParser.json())

// const transporter = nodemailer.createTransport({
//   host: 'smtp.forwardemail.net',
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
//     pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
//   },
// })

app.post('/saveFormData', async (req, res) => {
  try {
    const formData = req.body
    console.log(formData)
    let existingFormData = []
    try {
      const data = await fs.readFile(formDataFilePath, 'utf-8')
      existingFormData = JSON.parse(data)
    } catch (readError) {
      // If the file doesn't exist or cannot be read, continue with an empty array
    }

    existingFormData.push(formData)

    await fs.writeFile(
      formDataFilePath,
      JSON.stringify(existingFormData, null, 2),
      'utf-8'
    )

    res
      .status(200)
      .json({ success: true, message: 'Form data saved successfully.' })
  } catch (error) {
    console.error('Error saving form data:', error)
    res.status(500).json({ success: false, message: 'Internal server error.' })
  }
})
app.post('/saveBuyData', async (req, res) => {
  try {
    const formData = req.body
    console.log(formData)
    let existingFormData = []
    try {
      const data = await fs.readFile(formBuyDataPath, 'utf-8')
      existingFormData = JSON.parse(data)
    } catch (readError) {
      // If the file doesn't exist or cannot be read, continue with an empty array
    }

    existingFormData.push(formData)

    await fs.writeFile(
      formBuyDataPath,
      JSON.stringify(existingFormData, null, 2),
      'utf-8'
    )

    res
      .status(200)
      .json({ success: true, message: 'Form data saved successfully.' })
  } catch (error) {
    console.error('Error saving form data:', error)
    res.status(500).json({ success: false, message: 'Internal server error.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
