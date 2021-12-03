const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host     : 'localhost:33007',
    user     : 'AndresGavi',
    password : 'kasandra2',
    database : 'libros'

});