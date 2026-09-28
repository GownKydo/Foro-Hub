import os
from flask import Flask
from routes import init_routes

app = Flask(__name__)

# Llave secreta requerida para manejar sesiones de usuario y formularios
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'nexus_clave_secreta_desarrollo')

# Vinculamos las rutas directamente
init_routes(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)