from flask import Flask, render_template, send_file
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/download-resume')
def download_resume():
    try:
        return send_file('static/files/nelson.docx', as_attachment=True)
    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run(debug=True)

