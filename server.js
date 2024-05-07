const express = require('express') //ใช้เพื่อในการสร้างและจัดการเส้นทาง

const morgan = require('morgan') //ใช้ morgan middleware เพื่อบันทึกข้อมูลการร้องขอ HTTP ลงใน console
const cors = require('cors') //ใช้เพื่อให้แอปพลิเคชันสามารถรับข้อมูลจากโดเมนอื่นๆได้
const bodyParse = require('body-parser') //ใช้ body-parser middleware เพื่อแปลงข้อมูลใน HTTP request body เป็น Json

const connectDB = require('./config/db') //ใช้เพื่อ connect กับ DB

const { readdirSync } = require('fs') //ใช้เพื่ออ่านไฟล์ในโฟลเดอร์

const app = express() //สร้าง express app

connectDB() //เรียกใช้ func เพื่อ connect กับ DB

app.use(morgan('dev')) //ใช้ morgan middleware เพื่อบันทึกข้อมูลการร้องขอ HTTP ลงใน console
app.use(cors()) //ใช้เพื่อให้แอปพลิเคชันสามารถรับข้อมูลจากโดเมนอื่นๆได้
app.use(bodyParse.json({ limit: '10mb' })) //ใช้ body-parser middleware เพื่อแปลงข้อมูลใน HTTP request body เป็น Json

readdirSync('./route') //อ่านไฟล์ในโฟลเดอร์ route
    .map((url) => app.use('/api', require('./route/' + url))) //เรียกใช้งาน route ที่อ่านได้
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => console.log('Server is running on port 3000')) //เริ่มต้น express app ที่ port 3000