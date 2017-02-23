const eo = require('express'),
app = eo(),
port = process.env.PORT || 8080;

app.get('/', (req, res)=>{

	res.send('Hi from server.js');
});

app.listen(port, ()=>{
	console.log(`Listening on port localhost:// ${port}`);
});