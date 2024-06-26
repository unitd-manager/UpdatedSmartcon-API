var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
const fileUpload = require('express-fileupload');

var privateKey  = fs.readFileSync('sslcrt/server.key', 'utf8');
var certificate = fs.readFileSync('sslcrt/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(3001);
httpsServer.listen(3002);
    
var bodyParser = require('body-parser');
var cors = require('cors');
const _ = require('lodash');
const mime = require('mime-types')

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
const project = require('./routes/project.js');
const Arouter = require('./routes/attachment.js');
const Auth = require('./routes/auth.js');
const tender = require('./routes/tender.js');
const employee = require('./routes/employee.js');
const company = require('./routes/company.js');
const projecttabcostingsummary = require('./routes/projecttabcostingsummary.js');
const indexRouter = require('./routes/fileUpload'); 
const projecttabmaterialusedportal = require('./routes/projecttabmaterialusedportal.js');
const projecttabdeliveryorder = require('./routes/projecttabdeliveryorder.js');
const purchaseorder = require('./routes/purchaseorder.js');
const projecttabfinanaceportal = require('./routes/projecttabfinanceportal.js');
const projecttabsubconworkorder = require('./routes/projecttabsubconworkorder.js');
const projecttabmaterialstransferredportal = require('./routes/projecttabmaterialstransferredportal.js');
const content = require('./routes/content.js');
const valuelist = require('./routes/valuelist.js');
const staff = require('./routes/staff.js');
const subcategory = require('./routes/subcategory.js');
const category = require('./routes/category.js');
const booking = require('./routes/booking.js');
const loan = require('./routes/loan.js');
const leave = require('./routes/leave.js');
const expensehead = require('./routes/expensehead.js');
const clients = require('./routes/client.js');
const section = require('./routes/section.js');
const accounts = require('./routes/accounts.js');
const product = require('./routes/product.js');
const inventory = require('./routes/inventory.js');
const employeeModule = require('./routes/employeeModule.js');
const payrollmanagement = require('./routes/payrollmanagement.js');
const subcon = require('./routes/subcon.js');
const supplier = require('./routes/supplier.js');
const support = require('./routes/support.js');
const setting = require('./routes/setting.js');
const jobinformation = require('./routes/jobinformation.js');
const finance = require('./routes/finance.js');
const training = require('./routes/training.js');
const geocountry = require('./routes/geocountry.js');
const invoice = require('./routes/invoice.js');
const bank = require('./routes/bank.js');
const note = require('./routes/note.js');
//const email = require('./routes/email.js');
const vehicle = require('./routes/vehicle.js');
const attendance = require('./routes/attendance.js');
const usergroup = require('./routes/usergroup.js');
const commonApi = require('./routes/commonApi.js');
const reports = require('./routes/reports.js');
const claim = require('./routes/claim.js');
const projecttabquote = require('./routes/projecttabquote.js');
const cpfCalculator = require('./routes/cpfCalculator.js');

const timesheet = require('./routes/timesheet.js');


app.use('/invoice', invoice);
app.use('/vehicle', vehicle);
app.use('/note', note);
app.use('/bank', bank);
app.use('/jobinformation', jobinformation);
app.use('/finance', finance);
app.use('/training', training);
app.use('/geocountry', geocountry);
app.use('/support', support);
app.use('/setting', setting);
app.use('/supplier', supplier);
app.use('/subcon', subcon);
app.use('/accounts', accounts);
app.use('/inventory', inventory);
app.use('/payrollmanagement', payrollmanagement);
app.use('/employeeModule',employeeModule);
app.use('/product', product);
app.use('/project', project);
app.use('/attachment', Arouter);
app.use('/api', Auth);
app.use('/tender', tender);
app.use('/employee', employee);
app.use('/company', company);
app.use('/projecttabcostingsummary', projecttabcostingsummary);
app.use('/projecttabmaterialusedportal',projecttabmaterialusedportal);
app.use('/projecttabdeliveryorder', projecttabdeliveryorder);
app.use('/purchaseorder', purchaseorder);
app.use('/projecttabfinanceportal', projecttabfinanaceportal);
app.use('/projecttabsubconworkorder', projecttabsubconworkorder);
app.use('/projecttabmaterialstransferredportal',projecttabmaterialstransferredportal);
app.use('/content', content);
app.use('/file', indexRouter);
app.use('/valuelist', valuelist);
app.use('/staff', staff);
app.use('/subcategory', subcategory);
app.use('/category', category);
app.use('/booking', booking);
app.use('/leave', leave);
app.use('/clients', clients);
app.use('/loan', loan);
app.use('/expensehead', expensehead);
app.use('/section', section);
//app.use('/email', email);
app.use('/attendance', attendance);
app.use('/usergroup', usergroup);
app.use('/commonApi', commonApi);
app.use('/reports', reports);
app.use('/claim', claim);
app.use('/projecttabquote', projecttabquote);
app.use('/timesheet', timesheet);
app.use('/cpfCalculator', cpfCalculator);



app.use(fileUpload({
    createParentPath: true
}));
module.exports = app;