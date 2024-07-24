import os
from flask import Flask,jsonify, request, send_file
from enum import Enum
import random
from datetime import datetime
from flask_cors import CORS
import math

app = Flask(__name__)

StatusCamera = Enum('StatusCamera', 'on off recording error')
StatusGNSS = Enum('StatusGNSS', 'fix float off error')
StatusPower = Enum('StatusPower', 'plugged battery nobattery')
ConfigSystemPosition = Enum('ConfigSystemPosition', 'front back')
	
def conv_gps(val):
    v = val * 0.01
    e = int(v)
    z = v - float(e)
    return e + ((z * 100.0) / 60.0)

def read_gps(filepath):
    coords = []
    index = 0
    file = open(filepath, "r")
    for line in file:
        data = line.split(',')
        if len(data) >= 9:
            if data[0] == "$GNGGA":
                if data[2] != "" and data[4] != "":
                    lat = conv_gps(float(data[2])) * (1 if data[3] == "N" else -1)
                    lon = conv_gps(float(data[4])) * (1 if data[5] == "E" else -1)
                    coords.append([lat, lon])
                    index = index + 1
            if data[0] == "$GNRMC":
                if data[3] != "" and data[5] != "":
                    lat = conv_gps(float(data[3])) * (1 if data[4] == "N" else -1)
                    lon = conv_gps(float(data[5])) * (1 if data[6] == "E" else -1)
                    coords.append([lat, lon])
                    index = index + 1
    file.close()
    return coords

def generate_gps_points(center_lat, center_long, num_points, radius):
    points = []
    for _ in range(num_points):
        # Générer des décalages aléatoires pour la latitude et la longitude
        lat_offset = random.uniform(-radius, radius)
        long_offset = random.uniform(-radius, radius)
        
        # Calculer les nouvelles coordonnées
        new_lat = center_lat + lat_offset
        new_long = center_long + long_offset
        point = [new_lat, new_long]
        # Ajouter le point à la liste
        points.append(point)
    
    return points

def getStatusGNSS():
    return {
        "status" : random.choice(list(StatusGNSS)).name,
        "satellites" : random.randrange(99),
        "position" : [random.uniform(-0.7000, -0.5000), random.uniform(47.4000 ,47.6000)],
        "speed" : round(random.uniform(0.0, 25.0),3),
        "text": "",
        "accuracy": round(random.uniform(0.0, 50.0),3)
    }

def getConfigPosition():
    return {
        "position" : random.choice(list(ConfigSystemPosition)).name
    }

def getStatusNetwork():
    return {
        "quality" : random.randrange(100),
        "text": random.choice(['Orange', 'SFR', 'Bouygue', ''])
    }

def getStatusPower():
    return {
        "status" : random.choice(list(StatusPower)).name,
        "percent" : random.randrange(100)
    }

def getStatusCamera():
    return {
        "status": random.choice(list(StatusCamera)).name,
    }

def getStatusCameras():
    return {
        "right": getStatusCamera(),
        "left": getStatusCamera()
    }

def getTime():
    return datetime.now().strftime("%H:%M")

def getStatus():
    return {
        "time": getTime(),
        "gnss": getStatusGNSS(),
        "network": getStatusNetwork(),
        "power": getStatusPower(),
        "cameras": getStatusCameras()
    }

@app.route("/status")
def status():
    return jsonify(getStatus())

@app.route("/")
def Home():
    return jsonify({"text": "WELCOME HOME"})

@app.route("/get_results")
def get_results():
    return ["Cclair-22-114-20240430144706","Cclair-22-114-20240429110507","Cclair-22-114-20240422150000","Cclair-22-114-20240403143321","Cclair-22-114-20240402160838","Cclair-22-114-20240402154210"]

@app.route("/get_parcel_details")
def get_parcel_details():
    return jsonify({
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "coordinates": [
                    [
                            [
                                -0.612399,
                                47.516338
                            ],
                            [
                                -0.613496,
                                47.516471
                            ],
                            [
                                -0.613603,
                                47.51607
                            ],
                            [
                                -0.612506,
                                47.515929
                            ],
                            [
                                -0.612399,
                                47.516338
                            ]
                        ]
                    ],
                    "type": "Polygon"
                },
                "properties": {
                    "area_parcel": "0.3840",
                    "dist_rows": "4.00",
                    "dist_trees": "1.20",
                    "id_parcel": "114",
                    "id_trees": "010316",
                    "id_user": "22",
                    "name_parcel": "Quasar_full",
                    "name_user": "josearbo",
                    "timestamp": "20240207164603"
                }
            }
        ]
    })

@app.route("/get_parcels")
def get_parcels():
    return jsonify({    "features": [
        {
            "id_parcel": "431",
            "id_user": "104",
            "name_parcel": "B",
            "name_user": "TERRE DE POMMES"
        },
        {
            "id_parcel": "465",
            "id_user": "111",
            "name_parcel": "113",
            "name_user": "F.RABIN"
        },
        {
            "id_parcel": "114",
            "id_user": "22",
            "name_parcel": "Quasar_full",
            "name_user": "josearbo",
        },
        {
            "id_parcel": "409",
            "id_user": "62",
            "name_parcel": "AUTOROUTE SUD INOGO",
            "name_user": "M.Fauriel"
        },
        {
            "id_parcel": "65",
            "id_user": "54",
            "name_parcel": "112",
            "name_user": "AG0115"
        },
        {
            "id_parcel": "104",
            "id_user": "61",
            "name_parcel": "11E - Castang",
            "name_user": "Osmia"
        }
    ]})

@app.route("/get_algos")
def get_algos():
    return ["BOUTONS ROSE (E2)_103","FLEURS (F2)_102"]

@app.route("/get_trace")
def get_trace():
    return read_gps("C:/Users/Haidara/Desktop/Coordonnees/nmea_cclair_20220922123750_tuffalun_avant_acquisition4.log")

@app.route("/set_algos")
def set_algos():
    user = request.form['algos']
    return "Algo configured"

@app.route("/set_side")
def set_side():
    user = request.form['side']
    return "Success"

@app.route("/download_result")
def download_result( ):
    result_path = "C:/Users/Haidara/Desktop/React_native/AgriConnect/Cclair-85-22-20211202091028.zip"
    if result_path is not None:
        if os.path.exists(result_path):
            return send_file(result_path, as_attachment=True)
    else:
        return "Error"

@app.route("/config")
def config():
    return jsonify(getConfigPosition())

#@app.route("/start")
#def start():
#    return jsonify(start())

#@app.route("/pause")
#def start():
#    return jsonify(pause())

#@app.route("/stop")
#def start():
#    return jsonify(stop())

   
if __name__ == "__main__":
     CORS(app)
     with app.app_context():
        app.run(port=80, host="0.0.0.0")