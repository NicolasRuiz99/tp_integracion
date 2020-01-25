# coding: UTF-8
import os, sys
import mercadopago
import json

def pagar(items,id):
    preference = {
      "items": items,
    'back_urls': {'pending': 'http://localhost:3000/pending/' + str(id), 'success': 'http://localhost:3000/success/' + str(id), 'failure': 'http://localhost:3000/failure/' + str(id)},
    'auto_return': 'approved'
    }

    mp = mercadopago.MP("TEST-5523459534347039-012203-4e4fea7e852c15ebd9a24a19120341ae-257291906")
    #mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
    mp.sandbox_mode(True)

    preferenceResult = mp.create_preference(preference)

    #print(preferenceResult)
    url = preferenceResult["response"]["init_point"]

    return url