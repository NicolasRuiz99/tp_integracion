import psycopg2 as dbapi
from psycopg2 import Error
from classes import User
import json

def connect_ddbb ():
    con = dbapi.connect("dbname='ddbb_sist' user='admin' host='127.0.0.1' password='admin123'")
    cur = con.cursor()
    return con,cur

def disconnect_ddbb (con,cur):
    con.close()
    cur.close()

def registerUser (new):
    try:
        con, cur = connect_ddbb ()
        query = 'insert into users (e_mail,psw) values (%s,%s)'
        new_record = (new.e_mail,new.psw)
        cur.execute (query,new_record)
    except (Exception,Error) as error:
        if (con):
            ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def listUsers ():
    try:
        con, cur = connect_ddbb ()
        query = 'select * from users'
        cur.execute (query)
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def modUser (new):

    try:
        con, cur = connect_ddbb ()
        query = 'select * from users'
        cur.execute (query)
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)


listUsers ()
#new = User ('jaja@jaja.com','jaja')
#new.json

#registerUser (new)

#def register_user ()

#sql = "select * from users"
#cur.execute(sql)

#for fila in cur.fetchall():
#    print(fila)
#   print(fila[1])

#sql = "insert into dioses (nombre, poder) values ('hefesto', 'forja')"
#cur = con.cursor()
#cur.execute(sql)

#cur.close()
#con.commit()
#con.close()