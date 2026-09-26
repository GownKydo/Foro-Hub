# Usar una imagen oficial de Python ligera como base
FROM python:3.11-slim

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar primero el archivo requirements.txt (Esto optimiza el tiempo de construcción aprovechando el caché de Docker)
COPY requirements.txt .

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código del proyecto al contenedor
COPY . .

# Exponer el puerto que usará Flask
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]