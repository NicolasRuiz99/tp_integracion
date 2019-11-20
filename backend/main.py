from flask import Flask, jsonify, request, json
from classes import listUsers,listCustomers,listRoles

app = Flask(__name__)

@app.route ('/',methods=['GET'])
def listall():
    results = listCustomers()
    return jsonify({'results' : results})

if __name__ == '__main__':
    app.run(debug=True)