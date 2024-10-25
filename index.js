const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

//Exercise 1: Report Card Generation

const studentData = [
  { studentName: 'John', rollNo: 201, science: 88, history: 75, geography: 90 },
  {
    studentName: 'Alice',
    rollNo: 202,
    science: 92,
    history: 85,
    geography: 88,
  },
  { studentName: 'Bob', rollNo: 203, science: 78, history: 89, geography: 91 },
];

function generateReportCard(studentData, rollNo) {
  for (i = 0; i < studentData.lengt; i++) {
    if (studentData[i].rollNo === rollNo) {
      console.log('===== Report Card for John ======');
      console.log('');
      console.log('Roll No. : ' + studentData[i].rollNo);
      console.log('');
      console.log('------');
      console.log('');
      console.log('Marks:');
      console.log('');
      console.log('------');
      console.log('science: ' + studentData[i].science);
      console.log('');
      console.log('history: ' + studentData[i].history);
      console.log('');
      console.log('geography: ' + studentData[i].geography);
      console.log('------ ------ ------');
    }
  }
}

app.get('/studentData/rollNo/:rollNo', (req, res) => {
  let rollNo = parseInt(req.params.rollNo);
  let result = generateReportCard(studentData, rollNo);
  console.log(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
