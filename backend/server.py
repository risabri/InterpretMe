from flask import Flask, jsonify, request, flash, render_template, send_file
import os
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename


#logging.basicConfig(filename='record.log', level=logging.DEBUG)

UPLOAD_FOLDER = './public/images/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['GET'])
def index():
    if request.method == 'GET':
        response_body = {
            "name": "Hello World",
            "about" :"testing, 123",
            "foo": "bar"
        }
#   return 'DEFINED ROUTE DIR', 200
    return response_body


@app.route('/profile_pic_download', methods=['GET','POST'])
def my_profile():

    if request.method == 'GET':
        response_body = {
            "response": "Go ahead and upload your image!",
        }
    if request.method == 'POST':

        target=os.path.join(UPLOAD_FOLDER)
        if not os.path.isdir(target):
            os.makedirs(target)
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            #return redirect(url_for('download_file', name=filename))

        ## TODO add logic file type checking
        ## TODO add logic to save file to server
        ## TODO add logic to save file to database, specifically airbase
        ## TODO add logic to return file to user
        #file = request.files['file']
        #file.save(os.path.join('./', request.files['file'].filename))
        
        #return send_file(request.files['file'], mimetype='image/gif')
        response_body = {
            "result": "✅ saved image to server: " + secure_filename(file.filename)
        }
    return response_body


if __name__ == '__main__':
  
  
  app.run( debug=True )
