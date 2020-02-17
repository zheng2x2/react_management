const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/hello', (req, res) => {
    res.send({ message : 'Hello Express '});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/100/100/1',
            'name' : '김중원',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/100/100/2',
            'name' : '하지원',
            'birthday' : '700214',
            'gender' : '여자',
            'job' : '가수'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/100/100/3',
            'name' : '김가연',
            'birthday' : '901122',
            'gender' : '여자',
            'job' : '보안관'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));