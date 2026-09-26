from flask import Flask, render_template

# Inicializamos la aplicación de Flask
app = Flask(__name__)

# Rutas para las paginas
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/registro')
def registro():
    return render_template('registro.html')


# Bloque principal para arrancar el servidor
if __name__ == '__main__':
    app.run(debug=True, port=5000)
