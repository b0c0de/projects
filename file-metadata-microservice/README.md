<div class="container">

## API Project: File Metadata Microservice

### Usage:

Upload a file

After uploading file, you will receive information about the uploaded file in the following format  
**<font color="blue">{"name":"name of the file", "type":"type of file uploaded","size": size of the file in bytes}</font>**

Example of the output: **`{"name":"boss.png","type":"image/png","size":46085}`**

<div class="view">

<form enctype="multipart/form-data" method="POST" action="/api/fileanalyse"><input id="inputfield" type="file" name="upfile"> <input id="button" type="submit" value="Upload"></form>

</div>

</div>

<div class="footer">

Coded by [BoCode](https://github.com/BoCode84) for [freeCodeCamp](http://www.freecodecamp.com)

</div>
